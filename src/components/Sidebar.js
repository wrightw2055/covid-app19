import React, { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';


class Sidebar extends Component {
	goToHomePage() {
		this.context.router.push('/');
	}

	goToChartPage() {
		this.context.router.push('/chartpage');
	}


	render() {
		return (

			<MenuList>
				<MenuItem onClick={() => this.goToHomePage()}>Home</MenuItem>
				<MenuItem onClick={() => this.goToChartPage()}>Chart</MenuItem>
			</MenuList>
		);
	}
}

Sidebar.contextTypes = {
	router: PropTypes.object.isRequired,
};

export default Sidebar;
