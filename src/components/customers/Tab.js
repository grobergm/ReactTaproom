import React from 'react';

function Tab(props){
	let _tabName=null;
	let _table=null;
	let currentTab=null;
	function handleTab(event){
		event.preventDefault();
		props.onCheckTab({tabName:_tabName.value,table:_table.value});
	}

	return(
		<div style={{margin:'2rem 25%'}} className='dark-background'>
			{
			currentTab=props.tabs.find(tab=>{return tab.table===_table});
			currentTab ? <h1>Table {currentTab.table} {currentTab.tabName} </h1> :
			<form onSubmit={handleTab}>
				<input
					type='text'
					id='tabname'
					placeholder='Enter Your Name'
					ref={(input)=>{_tabName=input;}} />
				<input
					type='number'
					id='table'
					min='0'
					max='30'
					placeholder='Table'
					ref={(input)=>{_table=input;}} />
				<button type='submit'>Start Tab</button>
			</form>
			}

		</div>
		)
}

export default Tab