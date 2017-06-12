import { ACTION_TYPE } from '../actions/actions';

export default (state = false, action) => {
	switch (action.type) {
    	case ACTION_TYPE.ADD_ENDPOINTS:
    		return _.concat(state, action.value);
	    default: return state;
	}
};