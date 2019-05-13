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
		this.handleChangeTab=this.handleChangeTab.bind(this);
    this.handleAddTab=this.handleAddTab.bind(this);
    this.handleAddDrinkToTab=this.handleAddDrinkToTab.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
    this.handlePourDrink=this.handlePourDrink.bind(this);
	}

	handleAddTab(tabEntered){
    const newTabs=this.state.tabs.slice();
    newTabs.push(tabEntered);
    this.setState({tabs:newTabs});
  }

  handleAddDrinkToTab(tabNumber,drink){
    let newTabs=this.state.tabs.slice();
    let selectedTabIndex=this.state.tabs.findIndex(tab=>{return tab.table===tabNumber});
    newTabs[selectedTabIndex].order.push(drink);
    console.log(newTabs);
  }

  handlePourDrink(drinkName,drinkIndex,tabNumber,bartender){
    if(bartender){
      let newTabs=this.state.tabs.slice();
      let selectedTabIndex=this.state.tabs.findIndex(tab=>{return tab.table===tabNumber});
      if(newTabs[selectedTabIndex].order[drinkIndex].poured===false){
        newTabs[selectedTabIndex].order[drinkIndex].poured=true;
        this.setState({tabs:newTabs})
        let newKegs=this.state.kegs.slice();
        let selectedKegIndex=this.state.kegs.findIndex(keg=>{return keg.name===drinkName});
        newKegs[selectedKegIndex].pints++;
        this.setState({kegs:newKegs});
      }
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


	handleChangeTab(event){
		this.setState({tabSelected:event.target.value});
		this.handleShowTab(event.target.value);
	}

	handleShowTab(number){
		let currentTab=this.props.tabs.find(tab=>{return tab.table===number});
		this.setState({tab:currentTab})
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
							kegs={this.props.kegs} 
							onPourDrink={this.handlePourDrink} 
							onAddDrinkToTab={this.handleAddDrinkToTab}
							onSelectTab={this.handleSelectTab} />
				}
				<button className='orange-btn' onClick={this.onLogout}>Logout</button>
			</div>

		return(
			<div style={background}>
				{content}
			</div>
			)
	}
}

export default Staff;