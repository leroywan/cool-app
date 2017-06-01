import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import styles from './main.scss';

import App from './modules/App.jsx';

let router = <BrowserRouter><App /></BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));