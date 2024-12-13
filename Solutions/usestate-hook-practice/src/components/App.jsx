import React, {useState} from "react";


// let time = new Date().toLocaleTimeString(); 

function App() {
  setInterval(displayTime,1000);
  
  let time = new Date().toLocaleTimeString(); 
  const [Time,setTime]= useState(time);

  function displayTime(){
    let newTime = new Date().toLocaleTimeString(); 
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
