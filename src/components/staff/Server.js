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
			<AddKeg />
			<KegList kegs={props.kegs} admin={true} />
			<NewTabControl onAddTab={props.onAddTab} />
			{
				props.tabSelected ? <TabSelected tab={props.tabSelected} /> :	null
			}
			<TabList onSelectTab={props.onSelectTab} tabList={props.tabs} onAddDrinkToTab={props.onAddDrinkToTab} onPourDrink={props.onPourDrink}/>

		</div>
		)
}

export default Server;