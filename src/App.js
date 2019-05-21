import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Landing from './components/Landing';
import Staff from './components/staff/Staff';
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
        <Route 
          path='/staff' 
          render={()=><Staff kegs={props.masterKegList} />
          } />
        <Route path='/taproom' render={()=><Taproom kegs={props.masterKegList} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
   </Router>
  );
}

const mapStateToProps=state=>{
  return {
    masterKegList:state.kegList,
    masterTabList:state.tabList
  }
}


export default connect(mapStateToProps)(App);
