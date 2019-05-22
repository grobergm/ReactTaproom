import React from 'react';
import kegroom from '../../img/admin.jpg'
import KegList from '../kegs/KegList'
import AddKeg from '../kegs/AddKeg';
import TabList from './TabList';
import TabSelected from './TabSelected';
import NewTabControl from './NewTabControl';

import { connect } from 'react-redux';


function Server(props){
	console.log(props);
	return(
		<div>
			<h1>Server</h1>
			<KegList 
				kegs={props.kegs} 
				admin={true} />
			<NewTabControl />
			<TabList tabList={props.tabList}/>

			{
				props.tabSelected ? <TabSelected tabId={props.tabSelected} tabList={props.tabList} /> :	null
			}
							
			<AddKeg />
			
		</div>
		)
}

const mapStateToProps=(state)=>{
	console.log(state)
	return{
		tabSelected:state.tabState.selected,
		tabList:state.tabState.tabList
	}
}

export default connect(mapStateToProps)(Server);