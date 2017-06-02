import express from 'express';
import path from 'path';
import settings from '../../settings.json';
const server = express();

server.use(express.static(path.join(__dirname, '../../build/client')));

server.get('*', function(req, res) {
	console.log('get')
	res.sendFile(path.join(__dirname, '../client/index.html'));
});


server.listen(settings.application.port, function() {
	console.log(`server started on port ${settings.application.port}`);
});
