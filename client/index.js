import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './modules/Routes.jsx';

import styles from './styles/styles';

let router = <BrowserRouter><Routes></Routes></BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));