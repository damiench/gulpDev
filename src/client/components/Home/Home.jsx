import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '../Toolbar/Toolbar';
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
					<Toolbar/>
					<Link to='/orders'>to orders</Link>
				</div>
			</div>
		);
	}
}
