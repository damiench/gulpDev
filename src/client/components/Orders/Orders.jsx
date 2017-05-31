import React from 'react';
import { Link } from 'react-router-dom'; 

export default class Orders extends React.Component {

	render() {

		return (
			<div>
				Orders
				<Link to='/'> to home </Link>
			</div>
		);
	}
}