import io from 'socket.io-client';
import settings from '../../../settings.json';
import { addOrders } from '../actions/orders';
export var socket = null;

export const socketInit =  (store) => {
 	socket = io.connect(`${location.protocol}//${settings.application.host}:${settings.application.port}`);

	socket.on('get orders', data => {
		store.dispatch(addOrders(data));
	});
};
