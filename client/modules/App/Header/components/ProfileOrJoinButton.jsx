/******************************************************************************************

This component will appear to be a 'Join Now' button or a 'User Profile' button depending
on the authentication status given by the redux state tree

*******************************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';

import authProvider from 'utils/authProvider';
import auth from 'utils/auth'

const ProfileOrJoinButton = authProvider(
  (props) => {

    const profileOrJoinButton = (props.user.isAuthenticated) ? 

      <div className="cta-container">
        <RaisedButton labelColor="rgb(255, 255, 255)" backgroundColor="rgb(40, 40, 40)">
          <Link className="cta" to= { "/user/profile/" + props.user.userInfo.userId }>{ props.user.userInfo.username }</Link>
        </RaisedButton>
        <button onClick={ ()=>{ props.signOut() } }>Sign Out</button>
      </div> 

      :

      <div className="cta-container">
        <RaisedButton labelColor="rgb(255, 255, 255)" backgroundColor="rgb(40, 40, 40)">
          <Link className="cta" to="/login"><MapsRestaurant style={{ color: 'white' }}/> Join Now</Link>
        </RaisedButton>
      </div>

    return (
      { profileOrJoinButton }
    )
  }
)

export default ProfileOrJoinButton;