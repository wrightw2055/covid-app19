import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

export default class App extends Component {
	render() {
		return (
			<>
			<header>Covid 19</header>
					<div className='app'>
					<Home />
					
				</div>
			</>
		);
	}
}
