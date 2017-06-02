import { query } from '../lib/db';

export const selectOrders = (count = 1) => {
	query('SELECT * from Orders limit $1::int', [count], (err, res) => {
		if (err)
			return console.error('error running query', err);

		console.log('result orders: ', res);
		return res;
	});
}
