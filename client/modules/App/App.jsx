/******************************************************************************************

Main application file. 

This component is where the main application lives and wraps around all smaller components.

*******************************************************************************************/

import React from 'react';

import Navigation from './components/Header/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';

export default class App extends React.Component {

  render() {

    return (
      <div>
        <Navigation></Navigation>
     		<div className='page'>
     			<h1>Home Page</h1>
     		</div>
        <Footer></Footer>
      </div>
    );
  }
}