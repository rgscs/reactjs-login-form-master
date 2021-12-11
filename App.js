import React, { Component } from 'react';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
//import sidebar from './components/sidebar/Sidebar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Sidebar/>
				<Login/>
				
			</div>
		);
	}
}

export default App;
