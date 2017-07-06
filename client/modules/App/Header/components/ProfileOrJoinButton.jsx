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

      <div>
        <RaisedButton labelColor="rgb(255, 255, 255)" backgroundColor="rgb(40, 40, 40)">
          <Link className="cta" to= { "/user/profile/" + props.user.userInfo.userId }>{ props.user.userInfo.username }</Link>
        </RaisedButton>
        <button onClick={ ()=>{ props.signOut() } }>Sign Out</button>
      </div> 

      :

      <RaisedButton labelColor="rgb(255, 255, 255)" backgroundColor="rgb(40, 40, 40)">
        <Link className="cta" to="/login"><MapsRestaurant style={{ color: 'white' }}/><span> Join Now</span></Link>
      </RaisedButton>

    return (
      <div className="cta-container">{ profileOrJoinButton }</div>
    )
  }
)

export default ProfileOrJoinButton;