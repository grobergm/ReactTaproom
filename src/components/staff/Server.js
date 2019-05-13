import React from 'react';
import kegroom from '../../img/admin.jpg'
import KegList from '../kegs/KegList'
import AddKeg from '../kegs/AddKeg';
import TabList from './TabList';
import TabSelected from './TabSelected';

import NewTabControl from './NewTabControl';


function Server(props){
	return(
		<div>
			<h1>Server</h1>
			<KegList 
				kegs={props.kegs} 
				admin={true} 
				onPourDrink={props.onPourDrink} 
				onAddDrinkToTab={props.onAddDrinkToTab}
				onDeleteKeg={props.onDeleteKeg} />
			<NewTabControl onAddTab={props.onAddTab} />
			<TabList onSelectTab={props.onSelectTab} tabList={props.tabs} onTabPourDrink={props.onTabPourDrink}   />

			{
				props.tabSelected ? <TabSelected tab={props.tabSelected} onTabPourDrink={props.onTabPourDrink} /> :	null
			}
							
			<AddKeg onAddNewKeg={props.onAddNewKeg} />
			
		</div>
		)
}

export default Server;