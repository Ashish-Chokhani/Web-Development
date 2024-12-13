import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [arr, setArr] = useState([]);

  function deleteNote(id) {
    setArr(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addNote(note) {
    setArr(prevValue => {
      //console.log(arr);
      return [
        ...prevValue,
        note
      ];
    });
  }
  
  return (
    <div>
      <Header />
      <CreateArea addItem={addNote} />
      {arr.map((item, index) => <Note key={index} id={index} title={item.title} content={item.content} isClicked={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
