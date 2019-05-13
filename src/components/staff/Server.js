import React from 'react';
import kegroom from '../../img/admin.jpg'
import KegList from '../kegs/KegList'
import AddKeg from '../kegs/AddKeg';
import TabList from './TabList';
import NewTabControl from './NewTabControl';


function Server(props){
	return(
		<div>
			<h1 style={{color:'black'}}>Server</h1>
			<AddKeg />
			<NewTabControl onCheckTab={props.onCheckTab} />
			<TabList kegs={props.kegs} tabList={props.tabs} onAddDrinkToTab={props.onAddDrinkToTab} onPourDrink={props.onPourDrink}/>
			<KegList kegs={props.kegs} admin={true} />
		</div>
		)
}

export default Server;