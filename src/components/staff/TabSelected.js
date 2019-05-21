import React from 'react';
import { connect } from 'react-redux';


function TabSelected({tab, dispatch}){

	function calculateCost(){
		let total=0;
		tab.order.forEach(drink=>{
			total+=drink.price
		});
		return total;
	}
	return (
		<div style={{margin:'0 25%'}} class='dark-background'>
		<h1>Selected Tab</h1>
			<h2>{tab.tabName} Table:{tab.table}</h2>
			{
				tab.order.map((drink,index)=>{
					return <p
									className={drink.poured ? 'poured' : 'not-poured'} 
									// need to make new reducer for this
									onClick={onTabPourDrink(drink.id,index)} 
									key={index}>{drink.name} {drink.price}</p>
				})
			}
			<p>Total:${calculateCost()}</p>
		</div>
		)
}

export default connect()(TabSelected);