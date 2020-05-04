import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Chartpage from './components/Chartpage'

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={App}></Route>
				<Route path='/chartpage' component={Chartpage}></Route>
			</Router>
		);
	}
}
