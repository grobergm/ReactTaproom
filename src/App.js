import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Login from './components/Login';
import Public from './components/Public';
import NotFound from './components/NotFound';
import Inventory from './components/Inventory';
import Taproom from './components/Taproom';
import Management from './components/Management';

import kegArray from './models/kegData';

class App extends Component{
  constructor(){
    super();
    this.state={
      inventoryKegs:[],
      taproomKegs:[],
      sales:[],
      user:''
    }
  }
 
  componentDidMount(){
    this.setState({inventoryKegs:kegArray});
  }

  render(){
    return (
     <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
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
