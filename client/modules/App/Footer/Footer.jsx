import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { toast } from 'react-toastify';

export default class Footer extends React.Component {

  render() {

  	let developmentMode = (<div style={{ "display": "inline-block", "position":"fixed", "bottom":"0", "right":"0", "background":"red", "color":"white", "padding":"10px", "opacity":"0.3"}}><p>DEVELOPMENT MODE</p></div>)
  	if (!DEVELOPMENT) {
  		developmentMode = (<div></div>);
  	}


    return (
      <footer className='footer' >
        <div className="social-media">
          <a href="#"><img src="/assets/icons/fb.svg" /></a>
          <a href="#"><img src="/assets/icons/insta.svg" /></a>
          <a href="#"><img src="/assets/icons/twitter.svg" /></a>
        </div>
        { developmentMode }
      </footer>
    );
  }
}