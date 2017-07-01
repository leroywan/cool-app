/******************************************************************************************

Main application file. This components wraps around all routes within the application. 
All provider components should go here. 

*******************************************************************************************/

import React from 'react';
import { Router, Route, Link, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Import providers and redux store
import { Provider, connect } from 'react-redux';
import store from '../../store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { ToastContainer } from 'react-toastify';

// Import utils and actions
import auth from 'utils/auth';
import { authSuccess, authFail, receiveUserInfo } from 'actions/authActions';

// Import layouts
import Navigation from './Header/Navigation.jsx';
import Footer from './Footer/Footer.jsx';

// Import Pages
import Login from 'Pages/Login/Login.jsx';
import Register from 'Pages/Register/Register.jsx';
import About from 'Pages/About/About.jsx';
import NotFound from 'Pages/NotFound/NotFound.jsx';

// Import Scenes
import Home from 'Scenes/Home/Home.jsx';
import SearchResults from 'Scenes/SearchResults/SearchResults.jsx';
import UserProfile from 'Scenes/UserProfile/UserProfile.jsx';


// enable tap event
injectTapEventPlugin();

// authenticate jwt everytime user change pages
const authenticateJwt = () => {
  if (auth.isAuthenticated()) {
    store.dispatch(authSuccess());
    store.dispatch(receiveUserInfo(auth.getJwtUser()));
    auth.refreshJwt();
    auth.setAuthorizationHeader();
  } else {
    store.dispatch(authFail());
  }
}

export default class App extends React.Component {

  componentWillMount() {
    authenticateJwt();
  }

  componentWillUpdate() {
    authenticateJwt();
  }

  render() {
    return (
      <div>
        <Provider store={store}> 
          <MuiThemeProvider>
            <div>
              <Navigation/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/testRoute' component={About}/>
                <Route exact path='/user/profile/:userId' component={UserProfile} />
                <Route exact path='/search/:searchQuery' component={SearchResults} />
                <Route path='*' component={NotFound}/>
              </Switch>
              <Footer/>
            </div>
          </MuiThemeProvider>
        </Provider>
        <ToastContainer/>
      </div>
    )
  }
}
