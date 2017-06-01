import React from 'react';
import { Link } from 'react-router-dom';

import footer from './Footer.scss';


export default class Footer extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Back to Home</Link>
        <Link to="/about">More!</Link>
      </nav>
    );
  }
}