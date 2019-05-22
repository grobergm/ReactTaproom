import React from 'react';
import { connect } from 'react-redux';

function AddToTab({drink,dispatch,selected}){

	return(
		<div onClick={()=>dispatch({type:'ADD_TO_ORDER',id:selected,drink:drink})} className='orange-btn'>
			Add to Tab
		</div>
		)
}

const mapStateToProps=state=>{
	return {selected:state.tabState.selected}
}

export default connect(mapStateToProps)(AddToTab);