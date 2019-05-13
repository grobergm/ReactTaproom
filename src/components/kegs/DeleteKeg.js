import React from 'react';

function DeleteKeg(props){

	return(
		<div onClick={props.onDeleteKeg} className='red-btn'>
			Remove
		</div>
		)
}

export default DeleteKeg;