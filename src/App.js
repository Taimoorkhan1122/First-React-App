import React, { useState } from 'react';
import './App.css';
import './Room.css';
// import Room from './Room.js'
import ThemeContext from './context/ThemeContext'
import Header from './components/Header';
import Main from './components/mainWithFunction';

function App() {

  // let [isLit, setLit] = useState(true);
  const themeHook = useState("lit");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />

      </div>
    </ThemeContext.Provider>
  )
}

export default App;
