import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
	width: '16.5%',
	padding: '12px',
	margin: '0 1px 1px',
	background: '#1648E3',
	textDecoration: 'none',
	color: 'white',
}

const NavBar = () => {
	return (
		<div>
		<NavLink
				to="/"
				exact
				style={link}
				activeStyle={{
					background: 'darkblue'
				}}
				className="btn btn primary"
			>Home</NavLink>
			<NavLink
				to="/upcomingshows"
				exact
				style={link}
				activeStyle={{
					background: 'darkblue'
				}}
				className="btn btn primary"
			>Upcoming Shows</NavLink>
			<NavLink
				to="/news"
				exact
				style={link}
				activeStyle={{
					background: 'darkblue'
				}}
				className="btn btn primary"
			>News</NavLink>
			<NavLink
				to="/music"
				exact
				style={link}
				activeStyle={{
					background: 'darkblue'
				}}
				className="btn btn primary"
			>Music</NavLink>
			<NavLink
				to="/videos"
				exact
				style={link}
				activeStyle={{
					background: 'darkblue'
				}}
				className="btn btn primary"
			>Videos</NavLink>
			<NavLink
				to="/soundsillustrated"
				exact
				style={link}
				activeStyle={{
					background: 'darkblue'
				}}
				className="btn btn primary"
			>Sounds Illustrated</NavLink>	
	</div>	
		);
}

export default NavBar