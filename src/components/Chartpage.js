import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Chart from './Chart';
import './Chartpage.css';
import Searchbar from './Searchbar';

export default class Chartpage extends Component {
	constructor (props){
		super(props);
		this.state = {
			search: 'Spain'
		};
	}

	handleChange = (event) =>{ this.setState({search: event.target.value});
	
	}
	render() {
		return (
			<>
				<div className='all-content'>
					<div className='container'>
						<Sidebar />
					</div>
					<div className='search-container'>
						{' '}
						<Searchbar handleChange={this.handleChange} />{' '}
					<div className='chart-container'>
						<Chart search= {this.state.search} />
					</div>
					</div>
				</div>
			</>
		);
	}

}