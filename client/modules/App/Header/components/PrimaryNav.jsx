import React from 'react';
import { Link } from 'react-router-dom';

import auth from 'utils/auth';

import { BounceLoader } from 'react-spinners';


export default class PrimaryNav extends React.Component {

  
  render() {
    let primaryNav;
    if (this.props.state.user.isLoggedIn) {
      let name = this.props.state.user.info.loading ? "" : "Hi, " + this.props.state.user.info.data.profile.firstName;
      
      primaryNav = (
        <div>
          <div className="nav-item">
            <Link to= {"/profile?userId=" + auth.getJwtUser().userId }> { name }</Link>
          </div>
          <div className="nav-item logout">
            <a href="#" onClick={ 
              (e)=>{
                e.preventDefault();
                auth.removeJwtFromLocal();
                this.props.handleLogout();
              }
            } >Logout</a>
          </div>
        </div>
      )
    } else {

      primaryNav = (
        <div>
          <div className="nav-item">
            <Link to="/about">About</Link>
          </div>
          <div className="cta nav-item">
            <Link to="/">Login/Register</Link>
          </div>
        </div>
      )
    }
    
    return (
      <div id="primary-nav">
        { primaryNav }
      </div>
    )
  }
}