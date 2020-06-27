import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App(props) { //props is a javascript object and we can properties of  props object just 
                      // like normal js objects
  return <div className="App">
      Hello from {props.name} <br/> 
      Welcome <h1>{props.username}</h1>
    </div>
} 

export default App;
