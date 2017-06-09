import { ACTION_TYPE } from '../actions/actions';

export default (state = false, action) => {
	switch (action.type) {
    	case ACTION_TYPE.LOGIN:
    		return action.value;
	    default: return state;
	}
};
