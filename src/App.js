import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import Public from './components/Public';
import NotFound from './components/NotFound';

function App() {
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

export default App;
