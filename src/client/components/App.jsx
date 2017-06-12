import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import Header from '../containers/Header';
import Home from './Home/Home';
import Auth from './Auth/Auth';
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
					<Route exact path={'/'} component={Home} />
				</Switch>
			</div>
		</MuiThemeProvider>);
	}
}
