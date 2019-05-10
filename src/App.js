import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import Public from './components/Public';
import NotFound from './components/NotFound';

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
  render(){
    return (
     <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/admin' component={Admin} />
          <Route path='/public' component={Public} />
          <Route component={NotFound} />
        </Switch>
      </div>
     </Router>
  );
  }
}

export default App;
