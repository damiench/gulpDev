import socketDBHandler from './db-query-handler';
import socketAuthHandler from './auth-handler';
import io from 'socket.io';

export default (server) => {
	const socketServer = io(server);
	socketServer.on('connection', socket => {
		console.log('user connected');

		socketDBHandler(socket);
		socketAuthHandler(socket);

		socket.on('disconnect', () => {
			console.log('user disconnect');
		});
	});

};
