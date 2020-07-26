import React from 'react'
import themeContext from '../context/ThemeContext'

const ThemeTogglerStyles = {
    cursor: "pointer"
}

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = React.useContext(themeContext);
    return(
        <div 
            style={ThemeTogglerStyles}
            onClick={() => {
                setThemeMode(themeMode === "lit"? "dark": "lit")
            }}
        >
            <span title= "Switch Theme">
                {themeMode === "lit"? "🌙": "☀️"}
            </span>
        </div>
    )
}
export default ThemeToggler;