import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import Orders from './Orders/Orders';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import Header from '../containers/Header';
import React from 'react';

//styles
import '../style/root.scss';
import '../style/images.scss';

export default class App extends React.Component {
	render() {
		//we need theme provider to use material-ui components in app http://www.material-ui.com/#/get-started/usage
		return (<MuiThemeProvider>
			<div className='app'>
				<Header />
				<Switch>
					<PrivateRoute exact path={'/'} component={Home} />
					<PrivateRoute exact path={'/orders'} component={Orders} />
					<Route exact path={'/login'} component={Auth} />
				</Switch>
			</div>
		</MuiThemeProvider>);
	}
}
