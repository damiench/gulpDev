import { ACTION_TYPE } from '../actions/actions';

export default (state = [], action) => {
	switch (action.type) {
    	case ACTION_TYPE.ADD_VENDORS:
    		return _.concat(state, action.value);

	    default: return state;
	}
};
