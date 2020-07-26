import React, { useContext } from 'react';
import ThemeContex from '../context/ThemeContext';
import SwitchTheme from '../SwitchTheme';

const  Main =() => {
    const theme = useContext(ThemeContex)[0];
    const currentTheme = SwitchTheme[theme];

    return (
        <main style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`
        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button> This is a button</button>
        </main>
    );
}

export default Main;