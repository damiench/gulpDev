import { STAGES } from './constants';

const state = {
	authorized: window.localStorage.getItem('authToken'),
	orders: [],
	items: [],
	endpoints: [],
	selectedItems: [],
	selectedOrder: [],
	vendors: [],
	stage: STAGES.VIEW
};

export default state;
