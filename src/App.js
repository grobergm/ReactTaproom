import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Landing from './components/Landing';
import Staff from './components/staff/Staff';
import Server from './components/staff/Server';
import Taproom from './components/customers/Taproom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';



function App(props){
  return (
   <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/staff' component={Server} />
        <Route path='/taproom' component={Taproom} />
        <Route component={NotFound} />
      </Switch>
    </div>
   </Router>
  );
}

const mapStateToProps=state=>{
  return {
    masterKegList:state.kegList
  }
}


export default connect(mapStateToProps)(App);
