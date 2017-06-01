import React from 'react';
import { Router, Route, Link, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
	    <Route exact path='/' component={Home}/>
	    <Route exact path='/about' component={About}/>
	    <Route path='*' component={NotFound}/>
	  </Switch>
    )
  }
}