import React from 'react';
import flight from '../../img/flight.jpg';
import Bartender from './Bartender';
import Server from './Server';
import Management from './Management';
import LoginControl from './LoginControl';

function Staff(props){
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
					<Server onCheckTab={props.onCheckTab} tabs={props.tabs} kegs={props.kegs} onPourDrink={props.onPourDrink} onAddDrinkToTab={props.onAddDrinkToTab} /> :
					<Bartender kegs={props.kegs} onCheckTab={props.onCheckTab} tabs={props.tabs} onPourDrink={props.onPourDrink} onAddDrinkToTab={props.onAddDrinkToTab}/>
			}
			<button className='orange-btn' onClick={props.onLogout}>Logout</button>
		</div>

	return(
		<div style={background}>
			{content}
		</div>
		)
}

export default Staff;