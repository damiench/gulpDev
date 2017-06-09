import { ACTION_TYPE } from '../actions/actions';

export default (state = [], action) => {
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
