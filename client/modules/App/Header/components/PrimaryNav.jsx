/******************************************************************************************

This component is used to container the primary navigation links within the header

*******************************************************************************************/
import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';

import ProfileOrJoinButton from './ProfileOrJoinButton.jsx';

const PrimaryNav = () => {
	return (
		<nav id="primary-nav">
      <div className="nav-item"><FlatButton fullWidth={ true }><Link to="/about">How it Works?</Link></FlatButton></div>
      <div className="nav-item"><ProfileOrJoinButton/></div>
    </nav>
	)
}

export default PrimaryNav;