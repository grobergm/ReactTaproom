import React, {Component} from 'react';

class Tab extends Component{
	constructor(props){
		super(props);
		this.state={
			tabSelected:null,
			tab:null,
		}
		this.handleChangeTab=this.handleChangeTab.bind(this);
	}

	handleChangeTab(event){
		this.setState({tabSelected:event.target.value});
		this.handleShowTab(event.target.value);
	}

	handleShowTab(number){
		let currentTab=this.props.tabs.find(tab=>{return tab.table===number});
		this.setState({tab:currentTab})
	}

	render(){

	return(

		<div style={{margin:'2rem 25%'}} className='dark-background'>
			Table:
			<input
				onChange={this.handleChangeTab}
				type='number'
				id='table'
				min='0'
				max='30'
				placeholder='number' />
			<h2>{this.state.tab?this.state.tab.tabName:'No Tabs'}</h2>
		</div>
		)
	}
}

export default Tab