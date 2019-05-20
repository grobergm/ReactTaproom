import React from 'react';
import AddToTab from './AddToTab';
import DeleteKeg from './DeleteKeg';
import KegFill from './KegFill';
import PourDrink from './PourDrink';


function Keg(props){
	const kegStyle={
		textAlign:'center',
		padding:'2vw',
		backgroundColor:'rgba(0,0,0,0.7)',
		borderRadius:'3px'
	}

	return(
		<div style={kegStyle}>
			{
				props.admin ? 
				<div style={{display:'flex', justifyContent:'space-around'}}>
					<AddToTab onAddDrinkToTab={props.onAddDrinkToTab} />
				</div> 
				: null
			}
			<h2>{props.name}</h2>
			<p>{props.brewery}</p>
			<p>{props.type}</p>
			<p>${props.price} ABV:{props.abv}</p>
			<KegFill pints={props.pints} />
			{props.admin ? <PourDrink id={props.id} />: null}
			{props.admin&&props.pints > 100 ? <DeleteKeg onDeleteKeg={props.onDeleteKeg}/> : null}
		</div>
		)
}

export default Keg;