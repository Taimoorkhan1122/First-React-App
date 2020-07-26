import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import './Room.css';
import Room from './Room.js'

function App() { 
  {/*props is a javascript object and we can properties of  props object just 
  like normal js objects*/}
  let [isLit, setLit] = useState(true);
  return <div className="App">
      <h1>Continued the bootcamp</h1><br/>
      <Room 
        isLit={isLit}
        setLit={setLit}
      /> 
    </div>

} 

export default App;
