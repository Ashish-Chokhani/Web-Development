import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import homeImage from "../../assets/home-img.png";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import { opend } from "../../../declarations/opend";
import CURRENT_USER_ID from "../index";

function Header() {

  const [ownedGallery,setOwnedGallery] = useState();
  const [listingGallery,setListingGallery] = useState();

  async function getNFTs(){
    const userNFTIds = await opend.getOwnedNFTs(CURRENT_USER_ID);
    console.log(userNFTIds);
    setOwnedGallery(<Gallery title="My NFTs" ids={userNFTIds} role="collection"/>);
    const listedNFTids = await opend.getListedNFTs();
    console.log(listedNFTids);
    setListingGallery(<Gallery title="Discover" ids={listedNFTids} role="discover"/>);
  }

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <BrowserRouter>
      <div className="app-root-1">
        <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
          <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
            <div className="header-left-4"></div>
            <img className="header-logo-11" src={logo} />
            <div className="header-vertical-9"></div>
            <Link to='/'>
            <h5 className="Typography-root header-logo-text">OpenD</h5>
            </Link>
            <div className="header-empty-6"></div>
            <div className="header-space-8"></div>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/discover">Discover</Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/mint">Minter</Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/collection">My NFTs</Link>
            </button>
          </div>
        </header>
      </div>
      <Routes>
        <Route exact path="/" element={<img className="bottom-space" src={homeImage} />}/>
        <Route path="/discover" element={listingGallery}></Route>
        <Route path="/mint" element={<Minter />}></Route>
        <Route path="/collection" element={ownedGallery}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
