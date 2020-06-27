import React, {useState} from 'react';
import './Room.css';

// {islit? "Lit":"Dark"}
function Room() {
    return <div className="room lit">
      <h2>The room is: </h2>
      <Room></Room> 
    </div>

} 

export default Room;
