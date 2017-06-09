import { ACTION_TYPE } from './actions';

export const signInUser = (values) => {
	// TODO: make socket emit auth here and set authorizing in store true; on end auth emit on server the res of authoriring

	return {
		type: ACTION_TYPE.SIGN_IN,
		value: value,
	};
};

export const login = (value) => {
	return {
		type: ACTION_TYPE.LOGIN,
		value: value,
	};
};

export const logout = (value) => {
	return {
		type: ACTION_TYPE.LOGOUT,
		value: value
	};
};
