import pg from 'pg';
import settings from '../../../settings.json';
const settingsPG = settings.postgresql;

const config = {
	user: 				settingsPG.user,
	database: 			settingsPG.database,
	password: 			settingsPG.password,
	host: 				settingsPG.host,
	port: 				settingsPG.port,
	max: 				10,
	idleTimeoutMillis:  30000
};


const pool = new pg.Pool(config);

pool.on('error', (err, client) => {
	console.error('error from pool', err.message, err.stack);
});

export const query = (text, values, callback) => {
	return pool.query(text, values, callback);
};

export const connect = (callback) => {
	return pool.connect(callback);
};
