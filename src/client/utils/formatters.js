export const dollar = (number) => {
	if (typeof number == 'number')
		return number.toFixed(2) + '$';

	console.error('given parameter is not a number');
	return '0.00$';
};

export const time = (date) => {
	const _date = new Date(date);
	return (_date.getMonth() + 1) + '/'
		+ _date.getDate() + '/'
		+ _date.getFullYear();
};
