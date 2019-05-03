import React from 'react';

function Keg(props){
	return(
		<div>
			<h2>{props.name}</h2>
			<p>{props.brewery}</p>
			<p>{props.type}</p>
		</div>
		)
}

export default Keg;