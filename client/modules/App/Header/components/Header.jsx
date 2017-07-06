/******************************************************************************************

This component is the header that will contain the main navigation, profile buttons...etc. 
The header will be displayed on every 'Pages', 'Scenes', illustrated in the main App.jsx

*******************************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';

import PrimaryNav from './PrimaryNav.jsx';


export default class Header extends React.Component {

  render() {
    return (
      <header id="main-header">
        <Link id="logo" to="/"></Link>
        <PrimaryNav/>
      </header>
    );
  }
}