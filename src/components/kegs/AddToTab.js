import React from 'react';

function AddToTab(props){

	return(
		<div onClick={props.onAddDrinkToTab} className='orange-btn'>
			Add to Tab
		</div>
		)
}

export default AddToTab;