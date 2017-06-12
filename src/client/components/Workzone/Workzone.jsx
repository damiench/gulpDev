import React from 'react';
import store from '../../store';
import { sendOrders } from '../../actions/orders';
import Goods from '../Goods/Goods';
import Controls from './Controls';
import Status from './Status';
import { STAGES } from '../../utils/constants'; 
import '../../style/workzone.scss';

// NOTE!!! this must come from redux store, this is only for test view
//from here
var products = [];

for(var i = 0; i < 10; i++) {
	var id = 620448 + i;
	products.push({ id: id, name: 'Hanes Youth ComfortBlend Economics', endpoint: 'NY', shipDate: '2013-08-15T18:57:08.740Z', SKU: '5370 Purple YXS', quantity: Math.floor(Math.random() * (50 - 5 + 1)) + 5 })
}
//to here. must be deleted and replaced with socket/redux data receiving

export default class Workzone extends React.Component {
	render() {
		const { stage } = this.props;

		return (
			<div className='workzone container-fluid '>
				<Status />
				<Goods items={products}/>
				<Controls stage={}/>
			</div>
		);
	}
}
