import React from 'react';
import Tab from './Tab';
import newTabControl from './newTabControl';

function Server(props){

	return(
		<div>
			Server
			<newTabControl onCheckTab={props.onCheckTab} />
			<Tab tabs={props.tabs} />
		</div>
		)

}

export default Server;