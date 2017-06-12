import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../actions/actions';
import authorized from './authorize';
import orders from './orders';
import items from './items';
import stage from './stage';
import endpoints from './endpoints';
import vendors from './vendors';
import selectedItems from './selectedItems';
import selectedOrder from './selectedOrder';


let TShirtApp = combineReducers({
	authorized,
	orders,
	items,
	stage,
	endpoints,
	vendors,
	selectedItems,
	selectedOrder
});

export default TShirtApp;
