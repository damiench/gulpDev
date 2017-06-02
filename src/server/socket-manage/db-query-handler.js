import { selectOrders } from '../db-queries/order'; 

export default (socket) => {
	socket.on('send orders', (number) => {
		console.log('perform db query')
		console.log(selectOrders(number || 1));
	});
};