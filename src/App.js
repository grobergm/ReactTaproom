import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import KegList from './components/KegList';
import NotFound from './components/NotFound';

function App() {
  return (
     <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/admin' component={Admin} />
          <Route path='/keglist' component={KegList} />
          <Route component={NotFound} />
        </Switch>
      </div>
     </Router>
  );
}

export default App;
