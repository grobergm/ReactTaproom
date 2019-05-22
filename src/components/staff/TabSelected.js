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
		<div style={{margin:'0 25%'}} className='dark-background'>
		<h1>Selected Tab</h1>
			<h2>{tabData.tabName} Table:{tabData.table}</h2>
			{
				tabData.order.map((drink,index)=>{
					return <p
									className={drink.poured ? 'poured' : 'not-poured'} 
									// need to make new reducer for this
									// onClick={onTabPourDrink(drink.id,index)} 
									key={index}>{drink.name} {drink.price}</p>
				})
			}
			<p>Total:${calculateCost()}</p>
		</div>
		)
}

export default connect()(TabSelected);