import React from 'react';
import ThemeContext from '../context/ThemeContext';
import SwitchTheme from '../SwitchTheme';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ([theme]) => {
                        const currentTheme = SwitchTheme[theme];
                        
                        return(
                            <main style={{
                                padding: "1rem",
                                backgroundColor: `${currentTheme.backgroundColor}`,
                                color: `${currentTheme.textColor}`
                            }}>
                                <h1>Heading 1</h1>
                                <p>This is a paragraph</p>
                                <button> This is a button</button>
                            </main>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}
export default Main; 
