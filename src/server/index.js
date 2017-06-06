import settings from '../../settings.json';
import express from 'express';
import socketHandler from './socket-manage/socket-handler';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

const server = app.listen(settings.application.port, () => {
	console.log(`server started on port ${settings.application.port}`);
});

socketHandler(server);
