import React from 'react';
import Tab from './Tab';
import NewTabControl from './NewTabControl';

function Server(props){

	return(
		<div>
			Server
			<NewTabControl onCheckTab={props.onCheckTab} />
			<Tab tabs={props.tabs} />
		</div>
		)

}

export default Server;