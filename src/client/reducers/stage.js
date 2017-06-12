import { ACTION_TYPE } from '../actions/actions';

export default (state = [], action) => {
	switch (action.type) {
    	case ACTION_TYPE.GO_NEXT:
    		return action.value;
	default: return state;
	}
};
