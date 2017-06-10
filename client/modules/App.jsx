import React from 'react';
import { Router, Route, Link, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from '../reducers';

import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// enable tap event
injectTapEventPlugin();


let store = createStore(app);

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
	    	<MuiThemeProvider>
		      <Switch>
				    <Route exact path='/' component={Home}/>
				    <Route exact path='/about' component={About}/>
				    <Route path='*' component={NotFound}/>
			  	</Switch>
		 	  </MuiThemeProvider>
	 	  </Provider>
    )
  }
}