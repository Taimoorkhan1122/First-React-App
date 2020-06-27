import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Room.css';
import Room from './Room.js'

function App() { //props is a javascript object and we can properties of  props object just 
                      // like normal js objects
  return <div className="App">
      <h1>Welcome to my page</h1><br/>
      <Room></Room> 
    </div>

} 

export default App;
