/******************************************************************************************

Main application file. This components wraps around all routes within the application. 
All provider components should go here. 

*******************************************************************************************/

import React from 'react';
import { withRouter, Redirect, Router } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Import providers and redux store
import { Provider, connect } from 'react-redux';
import store from '../../store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ToastContainer } from 'react-toastify';

// Import utils and actions
import auth from 'utils/auth';
import { authenticateJwt, authSuccess, authFail, fetchUser } from 'actions/userActions';

// Import layouts
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

// Import Pages
import About from 'Pages/About/About.jsx';
import NotFound from 'Pages/NotFound/NotFound.jsx';
import Home from 'Pages/Home/Home.jsx';

// Import Scenes
import UserProfile from 'Scenes/UserProfile/UserProfile.jsx';
import Dashboard from 'Scenes/Dashboard/Dashboard.jsx';
import CreateProject from 'Scenes/CreateProject/CreateProject.jsx';




// enable tap event on mobile
injectTapEventPlugin();

// authenticate jwt everytime user change pages and populate user info
function refreshJwt() {
  if (auth.jwtExists()) {
    store.dispatch(authenticateJwt());
  }
}


class App extends React.Component {

  componentWillMount() {
    refreshJwt();
  }

  componentWillUpdate() {
    refreshJwt();
  }

  render() {
    let authComponent = (Component)=>{
      return 
    }
    return (
      <div>
        <Provider store={store}> 
          <MuiThemeProvider>
            <div>
              <Header/>
                <Switch>
                  // Add Application Routes (Scenes)
                  <Route path='/profile' render={ ()=>{ return !store.getState().user.isLoggedIn ? <Redirect to="/"/> : <UserProfile /> }} />
                  <Route path='/dashboard' render={ ()=>{ return !store.getState().user.isLoggedIn ? <Redirect to="/"/> : <Dashboard /> }} />
                  <Route path='/create-project' render={ ()=>{ return !store.getState().user.isLoggedIn ? <Redirect to="/"/> : <CreateProject /> }} />
                  // Add Page Routes
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About}/>

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

export default withRouter(App);
