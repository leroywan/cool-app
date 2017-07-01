/******************************************************************************************

This component is the header that will contain the main navigation, profile buttons...etc. 
The header will be displayed on every 'Pages', 'Scenes', illustrated in the main App.jsx

*******************************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';

import ProfileOrJoinButton from './ProfileOrJoinButton.jsx';

export default class Header extends React.Component {

  render() {
    return (
      <nav className="nav">
        <Link className="logo" to="/"></Link>
        <div className="nav-item"><FlatButton fullWidth={ true }><Link className="link" to="/about">How it Works?</Link></FlatButton></div>
        <ProfileOrJoinButton/>
      </nav>
    );
  }
}