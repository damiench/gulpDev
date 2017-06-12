import { ACTION_TYPE } from '../actions/actions';

export default (state = null, action) => {
	switch (action.type) {
	case ACTION_TYPE.SELECT_ORDER:
		return action.value;
	case ACTION_TYPE.SELECT_ORDER:
		return null;
	default: return state;
	}
};
