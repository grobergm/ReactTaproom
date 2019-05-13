import React, { Component } from 'react';
import flight from '../../img/flight.jpg';
import Bartender from './Bartender';
import Server from './Server';
import Management from './Management';
import LoginControl from './LoginControl';

class Staff extends Component{
	constructor(props){
		super(props);
		this.state={
			tabs:[],
			tabSelected:null,
		  user:null
		}
		this.handleChangeTab=this.handleChangeTab.bind(this);
    this.handleCheckTab=this.handleCheckTab.bind(this);
    this.handleAddDrinkToTab=this.handleAddDrinkToTab.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
    this.handlePourDrink=this.handlePourDrink.bind(this);
	}

	handleCheckTab(tabEntered){
    let openTab=this.state.tabs.find(tab=>{return tab.table===tabEntered.table});
    if(!openTab){
      const newTabs=this.state.tabs.slice();
      newTabs.push(tabEntered);
      this.setState({tabs:newTabs});
    }
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


  handleCloseTab(tabNumber,tip){
    let newTabs=this.state.tabs.slice();
    let total=0;
    let selectedTabIndex=this.state.tabs.findIndex(tab=>{return tab.table===tabNumber});
    newTabs[selectedTabIndex].order.forEach(drink=>{
      total+=drink.price
    });
    total+tip;
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
		
		let content=!props.user ? <LoginControl onLogin={props.onLogin} userData={props.userData} /> :
			<div>
				<h1>Logged in as: {props.user.username}</h1>
				{
					props.user.role==='management' ? 
						<Management /> :
						<Server 
							onCheckTab={props.onCheckTab} 
							tabs={props.tabs} 
							kegs={props.kegs} 
							onPourDrink={props.onPourDrink} 
							onAddDrinkToTab={props.onAddDrinkToTab} />
				}
				<button className='orange-btn' onClick={props.onLogout}>Logout</button>
			</div>

		return(
			<div style={background}>
				{content}
			</div>
			)
	}
}

export default Staff;