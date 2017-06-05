import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../actions/actions';

const initialState = {
	authorized: false,
	orders: []
};

const authorizing = (state = false, action) => {
	switch (action.type) {
	case ACTION_TYPE.AUTHORIZE:
		return action.value;
	default: return state;
	}
};

const managingOrders = (state = [], action) => {
	switch (action.type) {
	case ACTION_TYPE.ADD_ORDERS:
		return _.concat(state, action.value);
	case ACTION_TYPE.REMOVE_ORDERS:
		let idsToRemove = _.pick(action.value, 'id');

		return _.remove(state, (order) => {
			return _.includes(idsToRemove, order.id);
		});
	default: return state;
	}
};

let TShirtApp = combineReducers({
	authorized: authorizing,
	orders: managingOrders
});

export default TShirtApp;
