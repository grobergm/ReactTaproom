import React from 'react';

function PourDrink(props){

	return(
		<div onClick={props.onPourDrink} className='green-btn'>
			Pour Drink
		</div>
		)
}

export default PourDrink;