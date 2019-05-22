import React from 'react';
import { connect } from 'react-redux';
function TabList ({dispatch, tabList}){
	console.log(tabList);
	return(
		<div style={{margin:'2rem 25%'}} className='dark-background'>
			<h2>Open Tabs</h2>
			{
				tabList.map(tab=>{
				return <p key={tab.id} onClick={()=>dispatch({type:'SELECT_TAB',id:tab.id})}>{tab.tabName}</p>
				})
			}
		</div>
	)
}

 
export default connect()(TabList)