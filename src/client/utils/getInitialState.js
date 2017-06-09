// rewrite to actualy use tocken and check whether it valid or not

const state = {
	authorized: window.localStorage.getItem('authToken'),
	orders: []
};

export default state;
