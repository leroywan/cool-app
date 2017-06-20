import React from 'react';
import { Link } from 'react-router-dom';

import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './Navigation.scss';

export default class Navigation extends React.Component {

  render() {

  	// Display something to indicate that this is currently in development mode

    return (
      <nav className="nav">
        <Link className="logo" to="/"></Link>
        <div className="navItem"><FlatButton fullWidth={ true }><Link className="link" to="/about">How it Works?</Link></FlatButton></div>
        <div className="ctaContainer">
          <RaisedButton labelColor="rgb(255, 255, 255)" backgroundColor="rgb(40, 40, 40)">
            <Link className="cta" to="/about"><MapsRestaurant style={{ color: 'white' }}/> Join Now</Link>
          </RaisedButton>
        </div>
      </nav>
    );
  }
}