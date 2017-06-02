import settings from '../../settings.json';
import express from 'express';
import socketHandler from './socket-manage/socket-handler';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, '../../build/client')));

app.get('*', (req, res) => {
	console.log('get')
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

const server = app.listen(settings.application.port, () => {
	console.log(`server started on port ${settings.application.port}`);
});


socketHandler(server);