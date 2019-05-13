import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Staff from './components/staff/Staff';
import Taproom from './components/customers/Taproom';
import NotFound from './components/NotFound';

import Navbar from './components/Navbar';

import kegArray from './models/kegData';


class App extends Component{
  constructor(){
    super();
    this.state={
      kegs:[],
    }
  }
 
  componentDidMount(){
    this.setState({kegs:kegArray});
  }

  render(){
    return (
     <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/staff' render={()=><Staff kegs={this.state.kegs}/>} />
          <Route path='/taproom' render={()=><Taproom kegs={this.state.kegs}/>} />
          <Route component={NotFound} />
        </Switch>
      </div>
     </Router>
  );
  }
}

export default App;
