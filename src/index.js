import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';


class Todo extends Component {
	render() {
    return (
    	<div>
    		<App />
    		<App />
    		<App />
    	</div>
    	);
}
}

ReactDOM.render(<Todo />, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'))