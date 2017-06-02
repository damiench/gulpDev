import React from 'react';
import { Link } from 'react-router-dom'; 
import store from '../../store';
import { sendOrders } from '../../actions/actions';
export default class Orders extends React.Component {

	sendOrders() {
		store.dispatch(sendOrders({ data: 'blablabla'}));
	}


	render() {

		return (
			<div>
				Orders
				<button onClick={this.sendOrders.bind(this)}>send orders</button>
				<Link to='/'> to home </Link>
			</div>
		);
	}
}