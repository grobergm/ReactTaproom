import React from 'react';
import AddToTab from './AddToTab';
import DeleteKeg from './DeleteKeg';
import KegFill from './KegFill';
import PourDrink from './PourDrink';


function Keg({keg , admin}){
	const kegStyle={
		textAlign:'center',
		padding:'2vw',
		backgroundColor:'rgba(0,0,0,0.7)',
		borderRadius:'3px'
	}

	return(
		<div style={kegStyle}>
			{
				admin ? 
				<div style={{display:'flex', justifyContent:'space-around'}}>
					<AddToTab drink={keg}/>
				</div> 
				: null
			}
			<h2>{keg.name}</h2>
			<p>{keg.brewery}</p>
			<p>{keg.type}</p>
			<p>${keg.price} ABV:{keg.abv}</p>
			<KegFill pints={keg.pints} />
			{keg.admin ? <PourDrink id={keg.id} />: null}
			{keg.admin&&keg.pints > 100 ? <DeleteKeg id={keg.id}/> : null}
		</div>
		)
}

export default Keg;