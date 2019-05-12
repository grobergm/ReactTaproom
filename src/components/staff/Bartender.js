import React from 'react';
import kegroom from '../../img/admin.jpg'
import KegList from '../kegs/KegList'
import AddKeg from '../kegs/AddKeg';
import Tab from './Tab';
import NewTabControl from './NewTabControl';


function Bartender(props){
	return(
		<div>
			<h1 style={{color:'black'}}>Bar Mode</h1>
			<AddKeg />
			<NewTabControl onCheckTab={props.onCheckTab} />
			<Tab isBartender={true} kegs={props.kegs} tabs={props.tabs} onAddDrinkToTab={props.onAddDrinkToTab} onPourDrink={props.onPourDrink}/>
			<KegList kegs={props.kegs} admin={true} />
		</div>
		)
}

export default Bartender;