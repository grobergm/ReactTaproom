import React from 'react';
import TabSelected from './TabSelected';

function TabList (props){
	return(
		<div style={{margin:'2rem 25%'}} className='dark-background'>
			{
				props.tabList.map(tab=>{
				return <div onClick={()=>props.onSelectTab(tab)}>
						{tab.name}
					</div>
				})
			}
		</div>
	)
}

export default TabList