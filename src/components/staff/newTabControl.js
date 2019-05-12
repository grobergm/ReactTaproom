import React from 'react';

function NewTabControl(props){
	let _table=null;
	let _tabName=null;

	function handleTab(event){
		event.preventDefault();
		props.onCheckTab({tabName:_tabName.value,table:_table.value,order:[]});
		_table.value='';
		_tabName.value='';

	}
	return(
		<div>
			<form onSubmit={handleTab}>
				<input
					type='number'
					id='table'
					min='0'
					max='30'
					placeholder='number' 
					ref={(input)=>{_table=input;}} />
				<input
					type='text'
					id='tabName'
					placeholder='Name' 
					ref={(input)=>{_tabName=input;}} />
				<button type='submit'>Add New Tab</button>
			</form>
		</div>
	)
}

export default NewTabControl;