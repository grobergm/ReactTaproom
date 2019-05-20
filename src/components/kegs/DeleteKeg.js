import React from 'react';
import { connect } from 'react-redux';

function DeleteKeg({dispatch,id}){
	const action={
		type:'DELETE_KEG',
		id:id
	}
	return(
		<div onClick={()=>dispatch(action)} className='red-btn'>
			Remove
		</div>
		)
}

export default connect()(DeleteKeg);