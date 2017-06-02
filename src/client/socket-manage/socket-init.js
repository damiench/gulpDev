import { addOrders, ACTION_TYPE } from '../actions/actions';
import io from 'socket.io-client';
import settings from '../../../settings.json';

export var socket = null;

export const orderMiddleware = (store) => {
	return next => action => {
		const result = next(action);

		if (action.type === ACTION_TYPE.SEND_ORDERS)
			socket.emit('send orders', store.getState().orders)

		return result;
	} 
}

export const socketInit =  (store) => {
 	socket = io.connect(`${location.protocol}//${settings.application.host}:${settings.application.port}`);

	socket.on('get orders', data => {
		store.dispatch(addOrders(data));
	});
}
