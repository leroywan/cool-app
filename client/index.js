import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './modules/App/App.jsx';

import styles from './styles/styles';

let router = <BrowserRouter><App></App></BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));