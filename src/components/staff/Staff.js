import React, { Component } from 'react';
import pour from '../../img/keglist.jpg';
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
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
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
			backgroundImage:`url(${pour})`,
			backgroundSize:'cover',
			height:'90vh'
		}
		
		let content=!this.state.user ? <LoginControl onLogin={this.handleLogin} userData={userArray} /> :
			<div>
				<h1>Logged in as: {this.state.user.username}</h1> 
				<button className='orange-btn' onClick={this.handleLogout}>Logout</button>
				{
					this.state.user.role==='management' ? 
						<Management /> :
						<Server kegs={this.props.kegs} />
				}
			</div>

		return(
			<div style={background}>
				{content}
			</div>
			)
	}
}

export default Staff;