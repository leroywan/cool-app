import React from 'react';

import Navigation from '../../layouts/Header/Navigation.jsx';
import Footer from '../../layouts/Footer/Footer.jsx';


export default class Home extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Navigation></Navigation>
        <h1>This is the Home Page</h1>
        <Footer></Footer>
      </div>
    );
  }
}