/******************************************************************************************

This component is the header that will contain the main navigation, profile buttons...etc. 
The header will be displayed on every 'Pages', 'Scenes', illustrated in the main App.jsx

*******************************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';

import PrimaryNav from '../containers/PrimaryNav.jsx';


export default class Header extends React.Component {	

  render() {

  	let logoLink = this.props.state.user.isLoggedIn ? <Link id="logo" to="/dashboard"></Link> : <Link id="logo" to="/"></Link>

    return (
      <header id="main-header">
        { logoLink }
        <PrimaryNav/>
      </header>
    );
  }
}