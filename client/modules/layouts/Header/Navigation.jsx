import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.css';


export default class Navigation extends React.Component {

  render() {

  	// Display something to indicate that this is currently in development mode
  	let developmentMode = (<div style={{ "display": "inline-block", "position":"fixed", "bottom":"0", "right":"0", "background":"red", "color":"white", "padding":"10px", "opacity":"0.3"}}><p>DEVELOPMENT MODE</p></div>)
  	if (!DEVELOPMENT) {
  		developmentMode = (<div></div>);
  	}

    return (
      <nav className={styles.nav}>
      	{ developmentMode }
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}