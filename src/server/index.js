import express from 'express';
import path from 'path';

const server = express();

server.use(express.static(path.join(__dirname, '../../build/client')));

server.get('*', function(req, res) {
	console.log('get')
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

server.listen(3000, function() {
	console.log(' server started on port ', 3000);
});
