import React from 'react';
import { connect } from 'react-redux';


function TabSelected({tabId, tabList, dispatch}){
	function findTab(){
		return tabList.find(tab=>{return tab.id===tabId})
	}
	const tabData=findTab();
	function calculateCost(){
		let total=0;
		tabData.order.forEach(drink=>{
			total+=drink.price
		});
		return total;
	}

	
	return (
		<div className='dark-background'>
		<span className='red-btn' onClick={()=>{dispatch({type:'SELECT_TAB',id:null})}}>Close</span>
		<h1>{tabData.tabName}</h1>
			{
				tabData.order.map((drink,index)=>{
					return <p key={index}>{drink.name} {drink.price}</p>
				})
			}
			<hr/>
			<h2>Total: ${calculateCost()}</h2>
		</div>
		)
}

export default connect()(TabSelected);