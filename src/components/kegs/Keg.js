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
			<h2>{keg.name}</h2>
			<p>{keg.brewery}</p>
			<p>{keg.type}</p>
			<p>${keg.price} ABV:{keg.abv}</p>
			<KegFill pints={keg.pints} />
			{admin&&keg.pints > 100 ? <DeleteKeg id={keg.id}/> : null}
			{
				admin ? 
				<div style={{display:'flex', justifyContent:'space-around'}}>
					<AddToTab drink={keg}/>
					<PourDrink id={keg.id} />
				</div> 
				: null
			}
			<p>Total Pints:{keg.pints}</p>
		</div>
		)
}

export default Keg;