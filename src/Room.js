import React, {useState} from 'react';
import './Room.css';

function Room(props) {

    return <div className={`card ${props.isLit? "lit": "dark"}`}>
      <h2>The room is: {props.isLit? "lit":"dark"} </h2>
      <br/>
      <p>Toggle dark mode using react useState</p>
      <button onClick={() => props.setLit(!props.isLit)}> 
      Toggle light </button>
    </div>

} 

export default Room;
