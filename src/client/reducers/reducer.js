import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../actions/actions';
import authorized from './authorize';
import orders from './orders';

let TShirtApp = combineReducers({
	authorized,
	orders
});

export default TShirtApp;
