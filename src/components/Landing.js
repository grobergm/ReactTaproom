import React from 'react';
import beer from '../img/beer.jpg';

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
		height:'90vh',
		backgroundColor:'rgba(0,0,0,0.1)',
		backgroundImage:'linear-gradient(0deg,rgba(0,0,0,0) 50%,rgba(0,0,0,.3) 100%),radial-gradient(50% 120%,rgba(0,0,0,0) 50%,rgba(0,0,0,.5) 100%)',
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
	}

	const title={
		zIndex:'1',
	}

	return(
		<div style={layout}>			
			<div style={darkScreen}>
				<div style={title}>
					<h1 style={{marginBottom:'3vw'}}>React Taproom</h1>
				</div>
			</div>
		</div>
		)
}

export default Landing;