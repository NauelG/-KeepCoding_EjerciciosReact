import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import App from './App';
import Users from './Users';
import SPA from './SPA'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <SPA /> ,document.getElementById('root'));
registerServiceWorker();