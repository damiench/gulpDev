import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import lodash from 'lodash';
import store from './store';
import { socketInit } from './socket-manage/socket-init';
window._ = lodash;



socketInit(store);

ReactDOM.render((
	<BrowserRouter>
		<App/>
	</BrowserRouter>
), document.getElementById('root'));