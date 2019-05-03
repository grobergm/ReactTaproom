import React from 'react';
import beer from '../img/beer.jpg';
import { Link } from 'react-router-dom';

function Landing(){
	const layout={
		width:'100%',
		height:'100vh',
		backgroundImage:`url(${beer})`,
		backgroundSize:'cover',
		backgroundPosition:'left',
		position:'relative'
	}

	const darkScreen={
		positon:'absolute',
		width:'100%',
		height:'100vh',
		backgroundColor:'rgba(0,0,0,0.2)',
		backgroundImage:'linear-gradient(0deg,rgba(0,0,0,0) 50%,rgba(0,0,0,.5) 100%),radial-gradient(50% 120%,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%)',
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
	}

	const title={
		zIndex:'1',
	}

	const CTA={
		backgroundColor:'rgba(242,168,29)',
		color:'white',
		padding:'20px',
		borderRadius:'3px',
		fontWeight:'bold'
	}

	return(
		<div style={layout}>			
			<div style={darkScreen}>
				<div style={title}>
					<h1>React Taproom</h1>
					<Link to='/keglist'><a style={CTA}>See what's on Tap</a></Link>
				</div>
			</div>
		</div>
		)
}

export default Landing;