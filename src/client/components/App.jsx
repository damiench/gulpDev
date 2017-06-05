import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Orders from './Orders/Orders';

export default class App extends React.Component {
	render() {
		return (<div className='app'> 
				hello. this is first componentsadd
				<Switch>
					<Route exact path={'/'} component={Home}/>
					<Route path={'/orders'} component={Orders} />
				</Switch>
			</div>);
	}
}