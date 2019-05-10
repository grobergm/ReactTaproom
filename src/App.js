import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Login from './components/Login';
import Public from './components/Public';
import NotFound from './components/NotFound';
import Inventory from './components/Inventory';
import Taproom from './components/Taproom';
import Management from './components/Management';

import kegArray from './models/kegData';
import userArray from './models/userData'; 


class App extends Component{
  constructor(){
    super();
    this.state={
      inventoryKegs:[],
      taproomKegs:[],
      sales:[],
      user:{}
    }
    this.handleLogin=this.handleLogin.bind(this);
  }
 
  componentDidMount(){
    this.setState({inventoryKegs:kegArray});
  }

  handleLogin(userLogin){
    const matchedUser=userArray.find(user=> {return user.username===userLogin.username});
      if(matchedUser.password===userLogin.password){
        this.setState ({user:{username:matchedUser.username,role:matchedUser.role}})
      }
  }

  render(){
    console.log(this.state.user);
    return (
     <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' render={()=><Login users={userArray}/>} />
          <Route path='/public' render={()=><Public keglist={this.state.taproomKegs}/>} />
          <Route path='/inventory' render={()=><Inventory keglist={this.state.inventoryKegs}/>} />
          <Route path='/taproom' render={()=><Taproom  keglist={this.state.taproomKegs}/>} />
          <Route path='/management' render={()=><Management sales={this.state.sales}/>} />
          <Route component={NotFound} />
        </Switch>
      </div>
     </Router>
  );
  }
}

export default App;
