import React from 'react';

function newTabControl(props){
	let _table=null;
	let _tabName=null;

	function handleTab(event){
		event.preventDefault();
		this.props.onCheckTab({tabName:_tabName.value,table:_table.value});
		this.props.tabs.find(tab=>{return tab.table===_table});
	}
	return(
		<div>
		<form>
			<input
				type='number'
				id='table'
				min='0'
				max='30'
				placeholder='number' 
				ref={(input)=>{_table=input;}} />
			<input
				type='text'
				id='name'
				placeholder='Name' 
				ref={(input)=>{_tabName=input;}} />
		</form>
		</div>
		)
}