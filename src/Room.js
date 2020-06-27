import React, {useState} from 'react';
import './Room.css';

// {islit? "Lit":"Dark"}
function Room() {
    let [isLit, setLit] = useState(true);

    return <div className={`card ${isLit? "lit": "dark"}`}>
      <h2>The room is: {isLit? "lit":"dark"} </h2>
      <br/>
      <p>Toggle dark mode using react useState</p>
      <button onClick={() => {
          setLit(!isLit)
      }}> 
      Toggle light </button>
    </div>

} 

export default Room;
