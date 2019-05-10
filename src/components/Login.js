import React from 'react';
import flight from '../img/flight.jpg';

import LoginControl from './LoginControl';

function Login(props){
	const background={
		backgroundImage:`url(${flight})`,
		backgroundSize:'cover',
		height:'90vh'
	}
	
	let content=!props.user ? <LoginControl onLogin={props.onLogin} userData={props.userData} /> :
		<div>
			{props.user.username}
			<div className='orange-btn' onClick={props.onLogout}>Logout</div>
		</div>

	return(
		<div className='flex-col' style={background}>
			{content}
		</div>
		)
}

export default Login;