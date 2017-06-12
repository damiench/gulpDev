import { ACTION_TYPE } from '../actions/actions';

export default (state = [], action) => {
	switch (action.type) {
	case ACTION_TYPE.ADD_TO_SELECTED_ITEMS:
		return _.concat(state, action.value);
	case ACTION_TYPE.REMOVE_FROM_SELECTED_ITEMS:
		let idsToRemove = _.pick(action.value, 'id');

		return _.remove(state, (item) => {
			return _.includes(idsToRemove, item.id);
		});
	default: return state;
	}
};
