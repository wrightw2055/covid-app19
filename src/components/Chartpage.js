import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Chart from './Chart';
import './Chartpage.css';
import Searchbar from './Searchbar';

export default class About extends Component {
	render() {
		return (
			<>
				<div className='all-content'>
					<div className='container'>
						<Sidebar />
					</div>
					<div className='search-container'>
						{' '}
						<Searchbar />{' '}
					<div className='chart-container'>
						<Chart />
					</div>
					</div>
				</div>
			</>
		);
	}
}
