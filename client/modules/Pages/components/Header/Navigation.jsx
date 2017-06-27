import React from 'react';
import { Link } from 'react-router-dom';

import authProvider from 'utils/authProvider';
import auth from 'utils/auth';

import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './Navigation.scss';

const ProfileOrJoin = authProvider(
  (props)=> {
    const profileOrJoin = (props.isAuthenticated) ? 

      <div>
        <a href="#">Hi User!</a>
        <button onClick={ ()=>{ props.signOut() } }>Sign Out</button>
      </div> 

      :

      <RaisedButton labelColor="rgb(255, 255, 255)" backgroundColor="rgb(40, 40, 40)">
        <Link className="cta" to="/about"><MapsRestaurant style={{ color: 'white' }}/> Join Now</Link>
      </RaisedButton>

    return (
      <div className="ctaContainer">
        { profileOrJoin }
      </div>
    )
  }
)


export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="nav">
        <Link className="logo" to="/"></Link>
        <div className="navItem"><FlatButton fullWidth={ true }><Link className="link" to="/about">How it Works?</Link></FlatButton></div>
        <ProfileOrJoin/>
      </nav>
    );
  }
}