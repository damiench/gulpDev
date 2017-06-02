export default (socket) => {

	
	socket.on('log in', (data) => {
		console.log(data);
	});
}