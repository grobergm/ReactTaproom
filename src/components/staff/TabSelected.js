import React from 'react';

function TabSelected(props){
	function calculateCost(){
		let total=0;
		props.tab.order.forEach(drink=>{
			total+=drink.price
		});
		return total;
	}
	return (
		<div class='dark-background'>
		<h1>Selected Tab</h1>
			<h2>{props.tab.tabName} Table:{props.tab.table}</h2>
			{
				props.tab.order.map((drink,index)=>{
					return <p
									className={drink.poured ? 'poured' : 'not-poured'} 
									onClick={props.onTabPourDrink(drink.id,index)} 
									key={index}>{drink.name} {drink.price}</p>
				})
			}
			<p>Total:${calculateCost()}</p>
		</div>
		)
}

export default TabSelected;