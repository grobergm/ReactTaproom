import React from 'react';
import { connect } from 'react-redux';
function PourDrink({ dispatch, id }){
	const action={
		type:'POUR_DRINK',
		id: id
	}
	return(
		<div onClick={()=>{dispatch(action)}} className='green-btn'>
			Pour Drink
		</div>
		)
}

export default connect()(PourDrink);