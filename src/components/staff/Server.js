import React from 'react';
import Tab from './Tab';
import NewTabControl from './NewTabControl';

function Server(props){

	return(
		<div className='flex-col'>
			Server
			<NewTabControl onCheckTab={props.onCheckTab} />
			<Tab kegs={props.kegs} tabs={props.tabs} onAddDrinkToTab={props.onAddDrinkToTab} />
		</div>
		)

}

export default Server;