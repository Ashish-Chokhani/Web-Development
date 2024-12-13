import React from "react";
import Avatar from "./Avatar.jsx";
import Detail from "./Detail.jsx";

function Cards(props) {
  return (
    <div className="info">
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <Detail detailInfo={props.phone} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Cards;