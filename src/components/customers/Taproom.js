import React from 'react';
import flight from '../../img/flight.jpg';
import KegList from '../kegs/KegList';



function Taproom(props){
	const background={
	backgroundImage:`url(${flight})`,
	backgroundSize:'cover',
	height:'90vh'
	}
	return(
		<div style={background} >
			<h1>Current Selection</h1>
			<KegList kegs={props.kegs} admin={false} />
		</div>
	)
};

export default Taproom;