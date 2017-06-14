import React from 'react';

import Navigation from '../components/Header/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';
import SearchBar from '../../App/components/SearchBar/containers/SearchBarContainer.jsx'


import styles from './Home.scss';

export default class Home extends React.Component {

  render() {

    return (
      <div>
        <Navigation></Navigation>
     		<div className={ styles.page }>
     			<div style={{ 'position':'absolute', 'top':'50%', 'left':'50%', 'transform':'translate(-50%, -50%)' }}>
     				<SearchBar></SearchBar>
     			</div>
     		</div>
        <Footer></Footer>
      </div>
    );
  }
}