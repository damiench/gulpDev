import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './containers/App';
import lodash from 'lodash';
import store from './store';
import { socketInit } from './socket-manage/socket-init';
window._ = lodash;
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import 'bootstrap/dist/css/bootstrap.css';

socketInit(store);

ReactDOM.render((
	<Provider store={store} >
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
