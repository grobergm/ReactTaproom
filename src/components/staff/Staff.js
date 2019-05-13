import React, { Component } from 'react';
import flight from '../../img/flight.jpg';
import Server from './Server';
import Management from './Management';
import LoginControl from './LoginControl';
import userArray from '../../models/userData'; 

class Staff extends Component{
	constructor(props){
		super(props);
		this.state={
			tabs:[],
			tabSelected:null,
		  user:null
		}
		this.handleSelectTab=this.handleSelectTab.bind(this);
    this.handleAddTab=this.handleAddTab.bind(this);
    this.handleAddDrinkToTab=this.handleAddDrinkToTab.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
    this.handleTabPourDrink=this.handleTabPourDrink.bind(this);
	}

	handleAddTab(tabEntered){
    const newTabs=this.state.tabs.slice();
    newTabs.push(tabEntered);
    this.setState({tabs:newTabs});
  }

  handleAddDrinkToTab(drink){
  	if(this.state.tabSelected){
  		let newTabs=this.state.tabs.slice();
		  let selectedTabIndex=this.state.tabs.findIndex(tab=>{return tab.id===this.state.tabSelected.id});
		  drink.poured=false;
		  newTabs[selectedTabIndex].order.push(drink);
		  this.handleSelectTab(newTabs[selectedTabIndex]);
  	}
  }

  handleTabPourDrink(drinkID,drinkIndex){
    let newTabs=this.state.tabs.slice();
    let selectedTabIndex=this.state.tabs.findIndex(tab=>{return tab.id===this.state.tabSelected.id});
    if(newTabs[selectedTabIndex].order[drinkIndex].poured===false){
      newTabs[selectedTabIndex].order[drinkIndex].poured=true;
      this.setState({tabs:newTabs})
      this.props.onPourDrink(drinkID);
    }
  }

  handleSelectTab(tab){
  	this.setState({tabSelected:tab});
  }

  handleCloseTab(tabNumber,tip){
    let newTabs=this.state.tabs.slice();
    let total=0;
    let selectedTabIndex=this.state.tabs.findIndex(tab=>{return tab.table===tabNumber});
    newTabs[selectedTabIndex].order.forEach(drink=>{
      total+=drink.price
    });
    total+=tip;
    newTabs[selectedTabIndex].open=false;
    newTabs[selectedTabIndex].total=total;
  }

  handleLogin(userLogin){
    const matchedUser=userArray.find(user=> {return user.username===userLogin.username});
    if(matchedUser&&matchedUser.password===userLogin.password){
      this.setState ({user:{username:matchedUser.username,role:matchedUser.role}})
    }
  }

  handleLogout(){
    this.setState({user:null})
  }

	render(){
		const background={
			backgroundImage:`url(${flight})`,
			backgroundSize:'cover',
			height:'90vh'
		}
		
		let content=!this.state.user ? <LoginControl onLogin={this.handleLogin} userData={userArray} /> :
			<div>
				<h1>Logged in as: {this.state.user.username}</h1>
				{
					this.state.user.role==='management' ? 
						<Management /> :
						<Server 
							onAddTab={this.handleAddTab} 
							tabs={this.state.tabs} 
							tabSelected={this.state.tabSelected}
							kegs={this.props.kegs} 
							onPourDrink={this.props.onPourDrink} 
							onTabPourDrink={this.handleTabPourDrink} 
							onAddDrinkToTab={this.handleAddDrinkToTab}
							onSelectTab={this.handleSelectTab}
							onDeleteKeg={this.props.onDeleteKeg} />
				}
				<button className='orange-btn' onClick={this.handleLogout}>Logout</button>
			</div>

		return(
			<div style={background}>
				{content}
			</div>
			)
	}
}

export default Staff;