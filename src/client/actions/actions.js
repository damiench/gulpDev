export const ACTION_TYPE = {
	ADD_ORDERS: 'ADD_ORDER',
	REMOVE_ORDERS: 'REMOVE_ORDER',
	AUTHORIZE: 'AUTHORIZE'
};

export const login = (value) => {
	return {
		type: LOGIN,
		value: value
	};
};

export const addOrders = (value) => {
	return {
		type: ACTION_TYPE.ADD_ORDERS,
		value: value
	};
}
