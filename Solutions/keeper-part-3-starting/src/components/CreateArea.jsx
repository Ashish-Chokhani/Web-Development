import React, { useState } from "react";

function CreateArea(props) {
  const [isExpand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  function handleChange(event) {

    const { name, value } = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form>
        {isExpand && (<input name="title" placeholder="Title" value={note.title} onChange={handleChange} />)}
        <textarea name="content" placeholder="Take a note..." rows={isExpand ? 3:1} value={note.content} onChange={handleChange} onClick={expand} />
        <button onClick={(event) => {
          props.addItem(note);
          setNote({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
