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
      <nav className={styles.nav}>
        <Link className={ styles.logo } to="/"></Link>
        <div className={ styles.navItem }><FlatButton fullWidth={ true }><Link className={styles.link} to="/about">How it Works?</Link></FlatButton></div>
        <div className={ styles.ctaContainer }>
          <RaisedButton labelColor="rgb(255, 255, 255)" backgroundColor="rgb(40, 40, 40)">
            <Link className={styles.cta} to="/about"><MapsRestaurant style={{ color: 'white' }}/> Join Now</Link>
          </RaisedButton>
        </div>
      </nav>
    );
  }
}