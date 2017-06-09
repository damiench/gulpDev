import { ACTION_TYPE } from '../../actions/actions';
import { socket } from '../../socket-manage/socket-init';

export default (store) => {
	return next => action => {
		const result = next(action);

		if (action.type === ACTION_TYPE.SEND_ORDERS)
			socket.emit('send orders', store.getState().orders);

		return result;
	};
};
