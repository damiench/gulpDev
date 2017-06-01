import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import lodash from 'lodash';
window._ = lodash;

ReactDOM.render((
	<BrowserRouter>
		<App/>
	</BrowserRouter>
), document.getElementById('root'));