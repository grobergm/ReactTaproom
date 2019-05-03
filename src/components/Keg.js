import React from 'react';

function Keg(props){
	const kegStyle={
		textAlign:'center',
		padding:'2vw',
		backgroundColor:'rgba(0,0,0,0.7)',
		borderRadius:'2px'
	}

	return(
		<div style={kegStyle}>
			<h2>{props.name}</h2>
			<p>{props.brewery}</p>
			<p>{props.type}</p>
			<p>${props.price} ABV:{props.abv}</p>
		</div>
		)
}

export default Keg;