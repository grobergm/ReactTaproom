import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function NewTabControl({dispatch}){
	let _table=null;
	let _tabName=null;

	function handleTab(event){
		event.preventDefault();
		const action={
			type:'ADD_TAB',
			tab:{
				id:v4(),
				tabName:_tabName.value,
				table:_table.value,
				order:[]
			}
		}
		dispatch(action);
		_table.value='';
		_tabName.value='';
	}
	return(
		<div>
			<h2>Open a New Tab</h2>
			<form onSubmit={handleTab}>
				<input
					type='number'
					id='table'
					min='0'
					max='30'
					placeholder='Table' 
					ref={(input)=>{_table=input;}} />
				<input
					type='text'
					id='tabName'
					placeholder='Name' 
					ref={(input)=>{_tabName=input;}} />
				<button className='green-btn' type='submit'>Add New Tab</button>
			</form>
		</div>
	)
}

export default connect()(NewTabControl);