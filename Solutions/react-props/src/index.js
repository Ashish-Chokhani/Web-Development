import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return <div>

    <h2>{props.name}</h2>
    <img
      src={props.src}
      alt={props.alt}
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card name="Jack Bauer"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
      tel="++987 654 321"
      email="jack@nowhere.com"
    />
  </div>
  , document.getElementById("root")
);
