import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Login from './components/Login';
import Taproom from './components/Taproom';
import NotFound from './components/NotFound';
import Inventory from './components/Inventory';
import Servers from './components/Servers';
import Management from './components/Management';
import Navbar from './components/Navbar';

import kegArray from './models/kegData';
import userArray from './models/userData'; 


class App extends Component{
  constructor(){
    super();
    this.state={
      inventoryKegs:[],
      taproomKegs:[],
      sales:[],
      user:null
    }
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
  }
 
  componentDidMount(){
    this.setState({inventoryKegs:kegArray});
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
    console.log(this.state.user);
    return (
     <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' render={()=><Login userData={userArray} onLogin={this.handleLogin} onLogout={this.handleLogout} user={this.state.user}/>} />
          <Route path='/taproom' render={()=><Taproom keglist={this.state.taproomKegs}/>} />
          <Route component={NotFound} />
        </Switch>
      </div>
     </Router>
  );
  }
}

export default App;
