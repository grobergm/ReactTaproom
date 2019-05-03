import React from 'react';
import logo from '../img/beerIcon.png';
import { Link } from 'react-router-dom';

function Navbar(){
	const layout={
		display:'flex',
		height:'10vh',
		justifyContent:'space-around',
		alignItems:'center',
		backgroundColor:'black',
		fontWeight:'bold'
	}

	const navItems={
		color:'rgb(242,238,174)'
	}
	return(
		<div style={layout}>
				<Link to='/'><p style={navItems}>Home</p></Link>
				<Link to='/public'><p style={navItems}>Public</p></Link>
				<Link to='/admin'><p style={navItems}>Admin</p></Link>
		</div>
		)
}

export default Navbar;