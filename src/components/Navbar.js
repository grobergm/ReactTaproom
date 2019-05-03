import React from 'react';
import logo from '../img/beerIcon.png';
import { Link } from 'react-router-dom';

function Navbar(){
	const layout={
		display:'flex',
		height:'10vh',
		justifyContent:'space-around',
		alignItems:'center',
		backgroundColor:'rgba(140,13,13)',
		fontWeight:'bold'
	}

	return(
		<div style={layout}>
				<Link to='/'>
					<img style={{height:'40px'}} src={logo}/>	
				</Link>
				<Link to='/keglist'><p>Tap List</p></Link>
				<Link to='/admin'><p>Admin</p></Link>
		</div>
		)
}

export default Navbar;