import React, {Component} from 'react';

class Tab extends Component{
	constructor(props){
		super(props);
		this.state={
			tabSelected:null,
			tab:null,
			drinkSelected:null
		}
		this.handleChangeTab=this.handleChangeTab.bind(this);
		this.handleBeerSubmission=this.handleBeerSubmission.bind(this);
		this.handleSelectBeer=this.handleSelectBeer.bind(this);
	}

	handleChangeTab(event){
		this.setState({tabSelected:event.target.value});
		this.handleShowTab(event.target.value);
	}

	handleShowTab(number){
		let currentTab=this.props.tabs.find(tab=>{return tab.table===number});
		this.setState({tab:currentTab})
	}

	handleSelectBeer(event){
		this.setState({drinkSelected:event.target.value});
	}

	handleBeerSubmission(event){
    event.preventDefault();
    this.props.onAddDrinkToTab(this.state.tabSelected,this.state.drinkSelected)
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
			{
				this.state.tab ?
				 <div>
						<h2>{this.state.tab.tabName}</h2>
						<form onSubmit={this.handleBeerSubmission}>
							<select value={this.state.drinkSelected} onChange={this.handleSelectBeer}>
								{
									this.props.kegs.map(keg=>{
										return <option value={keg.name}>{keg.name}</option>
									})
								}
							</select>
							<button type='submit'>Add To Tab</button>
						</form>
						<div>
							{
								this.state.tab.order.map(drink=>{
									return <p>{drink}</p>
								})
							}
						</div>
				 </div> 
				 :
				 <p>No Tabs Open</p>
			}
		</div>
		)
	}
}

export default Tab