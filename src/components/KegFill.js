import React from 'react';

function KegFill(props){
	const keg={
		border:'1px solid black',
		height:'5vh',
		overflow:'hidden'
	}
	const fill={
		backgroundColor:'rgb(242,238,174)',
		height:'100%',
		transform:`translateX(-${props.pints/124*100}%)`
	}
	console.log(props.pints)
	return(

		<div style={keg}>
			<div style={fill}>

			</div>
		</div>
		)
}

export default KegFill;