import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [arr, setArr] = useState([]);

  function updateChange(Inputtext) {
    setArr(prevValue => {
      return [
        ...prevValue,
        Inputtext
      ];
    });
  }

  function deleteItem(id) {
    setArr(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={updateChange}/>
      <div>
        <ul>
          {arr.map((Item, index) => <ToDoItem key={index} id={index} onChecked={deleteItem} text={Item} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
