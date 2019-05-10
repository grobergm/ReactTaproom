import React, {Component} from 'react';

class Tab extends Component{
	constructor(props){
		super(props);
		this.state={
			tab:null
		}
		this.handleChangeTab=this.handleChangeTab.bind(this);
	}

	handleChangeTab(event){
		this.setState({tab:event.target.value});
	}

	render(){
	let _tabName=null;
	let currentTab=null;

	return(
		<div style={{margin:'2rem 25%'}} className='dark-background'>
			Table:
			<input
				onChange={this.handleTable}
				type='number'
				id='table'
				min='0'
				max='30'
				placeholder='number' />

		</div>
		)
	}
}

export default Tab