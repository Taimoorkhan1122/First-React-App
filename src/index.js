import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'

/* When we want to write Jsx we start with <
and when we want to write plain JS we use curly brackets */
/* <form>
    <h2>Enter your search here</h2> <br/><input type="text"/>
</form>
<p>This is a demo text created using react components
React is really an intresting front end library to learn
thanks to Sir Zia and team for givig us this opportunity</p>*/

function Hi() {
  return <App/> 
}


ReactDOM.render(<Hi/>, document.querySelector('#root'));