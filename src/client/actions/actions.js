export const ACTION_TYPE = {
	ADD_ORDERS: 'ADD_ORDER',
	SEND_ORDERS: 'SEND_ORDERS',
	REMOVE_ORDERS: 'REMOVE_ORDER',
	AUTHORIZE: 'AUTHORIZE'
};

export const login = (value) => {
	return {
		type: ACTION_TYPE.AUTHORIZE,
		value: value
	};
};

export const addOrders = (value) => {
	return {
		type: ACTION_TYPE.ADD_ORDERS,
		value: value
	};
};

export const sendOrders = (value) => {
	return {
		type: ACTION_TYPE.SEND_ORDERS,
		value: value
	};
};
