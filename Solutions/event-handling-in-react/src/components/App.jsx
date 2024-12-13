import React, { useState } from "react";

function App() {
  const [colour,setColour]=useState("white");
  const [fullname,setFullName]=useState({
    fname: "",
    lname: ""
  });
  const [tempfullname,setFullTempName]=useState({
    fname: "",
    lname: ""
  });

  function setWhite(){
    setColour("white");
  }
  function setBlack(){
    setColour("black");
  }

  function handleChange(event){
    const {value,name}=event.target;

    setFullTempName(prevValue =>{
      if(name==="fname"){
        return{
          fname: value,
          lname: prevValue.lname
        }
      }
      else{
        return{
          fname: prevValue.fname,
          lname: value
        };
      }
    });
  }

  function updateName(event)
  {
    setFullName({
      fname: tempfullname.fname,
      lname: tempfullname.lname
    });
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <form onSubmit={updateName}>
      <input value={tempfullname.fname} name="fname" type="text" placeholder="First Name" onChange={handleChange}/>
      <input value={tempfullname.lname} name="lname" type="text" placeholder="Last Name" onChange={handleChange}/>
      <button type="submit" onClick={updateName} onMouseOut={setWhite} onMouseOver={setBlack} style={{backgroundColor: colour}}>Submit</button>
      </form>
    </div>
  );
}

export default App;
