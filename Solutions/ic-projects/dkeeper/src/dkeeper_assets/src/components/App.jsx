import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper";

function App() {

  const [arr, setArr] = useState([]);

  function deleteNote(id) {
    setArr(prevValue => {
      dkeeper.removeNote(id);
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addNote(note) {
    setArr(prevValue => {
      dkeeper.createNote(note.title,note.content);
      //console.log(arr);
      return [
        note,
        ...prevValue
      ];
    });
  }

  useEffect(() =>{
    fetchData();
  },[]);

  async function fetchData(){
    const notesArray=await dkeeper.readNotes();
    setArr(notesArray);
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
