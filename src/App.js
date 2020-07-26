import React, { useState } from 'react';
import './App.css';
import './Room.css';
import Room from './Room.js'
import ThemeContext from './context/ThemeContext'

function App() {

  // let [isLit, setLit] = useState(true);
  const isLit = true;
  return (
    <ThemeContext.Provider value={isLit}>
      <div className="App">
        <h1>Continued the bootcamp</h1><br />
        <Room
          isLit={isLit}
          setLit={setLit}
        />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
