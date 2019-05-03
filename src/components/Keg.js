import React from 'react';
import EditKeg from './EditKeg';
import DeleteKeg from './DeleteKeg';
import KegFill from './KegFill';


function Keg(props){
	const kegStyle={
		textAlign:'center',
		padding:'2vw',
		backgroundColor:'rgba(0,0,0,0.7)',
		borderRadius:'2px'
	}

	return(
		<div style={kegStyle}>
			{
				props.admin ? 
				<div style={{display:'flex', justifyContent:'space-around'}}>
					<EditKeg id={props.id} />
					<DeleteKeg id={props.id} />
				</div> 
				: null
			}
			<h2>{props.name}</h2>
			<p>{props.brewery}</p>
			<p>{props.type}</p>
			<p>${props.price} ABV:{props.abv}</p>
			<KegFill pints={props.pints} />
		</div>
		)
}

export default Keg;