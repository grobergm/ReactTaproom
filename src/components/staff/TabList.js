import React from 'react';

function TabList (props){
	return(
		<div style={{margin:'2rem 25%'}} className='dark-background'>
			{
				props.tabList.map(tab=>{
				return <p key={tab.id} onClick={()=>props.onSelectTab(tab)}>{tab.tabName}</p>
				})
			}
		</div>
	)
}

export default TabList