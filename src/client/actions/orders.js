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
