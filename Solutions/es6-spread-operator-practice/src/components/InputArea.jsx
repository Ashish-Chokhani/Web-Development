import React, { useState } from "react";

function InputArea(props) {
    const [Inputtext, setInputText] = useState("");

    function handleChange(event) {
        const newInputtext = event.target.value;
        setInputText(newInputtext);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={Inputtext} />
            <button onClick={() =>{
                props.addItem(Inputtext)
                setInputText("");
                }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
