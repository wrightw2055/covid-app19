import React, { Component } from 'react';
import './Home.css';
import Video from './video/doctorvideo.mp4';
import Sidebar from './Sidebar';


export default class Home extends Component {
	render() {
		return (
			<>
				<div className='sidebar'>
					{' '}
					<Sidebar />{' '}
				</div>
				<div className='video-style'>
					<video autoPlay loop muted
					>
						<source src={Video} type='video/mp4' />
					</video>
				</div>
				
			</>
		);
	}
}
