import React from "react";
import Cards from "./Cards";
import contacts from "../contacts.js";

function createCard(contact)
{
  return (
    <Cards
    key={contact.id}
    id={contact.id}
    name={contact.name}
    imgURL={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
    />
  );
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;

