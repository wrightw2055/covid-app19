import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';


export default class App extends Component {
	render() {
		return (
			<>
			<header className="header">Covid 19</header>
					<div className='app'>
					<Home />
					
				</div>
			</>
		);
	}
}
