import React from 'react';

function TabSelected(props){
	return (
		<div>
			<h2>{props.tab.tabName}{props.tab.table}</h2>
			<p>{props.tab.server}</p>
			{
				props.tab.order.map((drink,index)=>{
					return <p
									className={drink.poured ? 'poured' : 'not-poured'} 
									onClick={()=>props.onPourDrink()} 
									key={index}>{drink.name}</p>
				})
			}
		</div>
		)
}

export default TabSelected;