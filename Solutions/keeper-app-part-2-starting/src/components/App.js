import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map(element =>(
        <Note 
          key={element.key}
          title={element.title}
          content={element.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
