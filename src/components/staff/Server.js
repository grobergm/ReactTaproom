import React from 'react';
import Tab from './Tab';
import NewTabControl from './NewTabControl';

function Server(props){

	return(
		<div className='flex-col'>
			Server
			<NewTabControl onCheckTab={props.onCheckTab} />
			<Tab isBartender={false} kegs={props.kegs} tabs={props.tabs} onAddDrinkToTab={props.onAddDrinkToTab} onPourDrink={props.onPourDrink}/>
		</div>
		)

}

export default Server;