import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Toolbar/Sidebar';
import TopBar from '../Toolbar/TopBar';
import { addOrders, login } from '../../actions/actions';
import store from '../../store';
import Workzone from '../../containers/Workzone';


export default class Home extends React.Component {
	componentDidMount() {
		// TODO add here logic about pulling out info from server
	}

	render() {
		return(
			<div className='jumbotron jumbotron-fluid home-route'>
				<div className='container'>
					<TopBar />
					<Sidebar />
					<Workzone />
				</div>
			</div>
		);
	}
}
