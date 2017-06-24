import React from 'react';

import Navigation from '../components/Header/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';
import SearchBar from '../../App/components/SearchBar/SearchBar.jsx';
import RegistrationForm from '../../App/components/RegistrationForm/RegistrationForm.jsx';

import styles from './Home.scss';


export default class Home extends React.Component {

  render() {
    console.log(this.props);
    // const welcome = this.props.state.loginForm.isLoggedIn ? <h1> Hello { this.props.state.loginForm.userInfo.username }!</h1> : <h1>Hi Stranger!</h1>

    return (
      <div>
        <Navigation></Navigation>
     		<div className='page'>
     			<div style={{ 'position':'absolute', 'top':'50%', 'left':'50%', 'transform':'translate(-50%, -50%)' }}>
     				<SearchBar/>
     			</div>
     		</div>
        <Footer></Footer>
      </div>
    );
  }
}