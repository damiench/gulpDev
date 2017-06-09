export default (socket) => {
	socket.on('sign in', (userData) => {
		console.log(userData);
	});
};
