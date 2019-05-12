import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Staff from './components/staff/Staff';
import Taproom from './components/customers/Taproom';
import NotFound from './components/NotFound';

import Navbar from './components/Navbar';

import kegArray from './models/kegData';
import userArray from './models/userData'; 


class App extends Component{
  constructor(){
    super();
    this.state={
      kegs:[],
      tabs:[],
      user:null
    }
    this.handleCheckTab=this.handleCheckTab.bind(this);
    this.handleAddDrinkToTab=this.handleAddDrinkToTab.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
  }
 
  componentDidMount(){
    this.setState({kegs:kegArray});
  }

  handleCheckTab(tabEntered){
    let openTab=this.state.tabs.find(tab=>{return tab.table===tabEntered.table});
    if(!openTab){
      const newTabs=this.state.tabs.slice();
      newTabs.push(tabEntered);
      this.setState({tabs:newTabs});
    }
  }

  handleAddDrinkToTab(tabSelected,drink){
    let newTabs=this.state.tabs.slice();
    let selectedTabIndex=this.state.tabs.findIndex(tab=>{return tab.table===tabSelected});
    newTabs[selectedTabIndex].order.push(drink);
    console.log(newTabs);
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
    return (
     <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route 
            path='/staff' 
            render={()=>
              <Staff 
                tabs={this.state.tabs}
                onAddDrinkToTab={this.handleAddDrinkToTab}
                kegs={this.state.kegs}
                userData={userArray} 
                onCheckTab={this.handleCheckTab} 
                onLogin={this.handleLogin} 
                onLogout={this.handleLogout} 
                user={this.state.user}/>} />
          <Route path='/taproom' render={()=><Taproom kegs={this.state.kegs}/>} />
          <Route component={NotFound} />
        </Switch>
      </div>
     </Router>
  );
  }
}

export default App;
