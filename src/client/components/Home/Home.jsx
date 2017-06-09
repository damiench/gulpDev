import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Toolbar/Sidebar';
import TopBar from '../Toolbar/TopBar';
import { addOrders, login } from '../../actions/actions';
import store from '../../store';



export default class Home extends React.Component {
	componentDidMount() {
		// store.dispatch(addOrders({ color: 'white', count: 10, slaves: 'long' }));
	}

	render() {

		return(
			<div className='jumbotron jumbotron-fluid home-route'>
				<div className='container'>
					<TopBar />
					<Sidebar />

				</div>
			</div>
		);
	}
}
