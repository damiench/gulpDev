import React from 'react';
import { Link } from 'react-router-dom';
import { addOrders, login } from '../../actions/actions';
import store from '../../store';

export default class Home extends React.Component {
	componentDidMount() {
		console.log(store.getState());
		
		store.dispatch(addOrders({ color: 'white', count: 10, slaves: 'long' }));

		console.log(store.getState());
	}


	render() {

		return(
			<div>
				Home
				<Link to='/orders'>to orders</Link>
			</div>
		);
	}
}