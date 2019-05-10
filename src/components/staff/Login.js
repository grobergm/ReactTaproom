import React from 'react';
import flight from '../../img/flight.jpg';
import Inventory from './Inventory';
import Server from './Server';
import Management from './Management';
import LoginControl from './LoginControl';

function Login(props){
	const background={
		backgroundImage:`url(${flight})`,
		backgroundSize:'cover',
		height:'90vh'
	}
	
	let content=!props.user ? <LoginControl onLogin={props.onLogin} userData={props.userData} /> :
		<div>
			<h1>Welcome back, {props.user.username}</h1>
			{
				props.user.role==='management' ? 
					<Management /> :
					props.user.role==='server' ?
						<Server onCheckTab={props.onCheckTab} /> :
						<Inventory />
			}
			<div className='orange-btn' onClick={props.onLogout}>Logout</div>
		</div>

	return(
		<div className='flex-col' style={background}>
			{content}
		</div>
		)
}

export default Login;