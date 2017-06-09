import { ACTION_TYPE } from '../../actions/actions';
import { socket } from '../../socket-manage/socket-init';

export default (store) => {
	return next => action => {
		const result = next(action);
		console.log('login');
		switch (action.type) {
		case ACTION_TYPE.LOGIN:
			if (result.value == true)
				localStorage.setItem('authToken', true);
			break;
		case ACTION_TYPE.LOGOUT:
			localStorage.removeItem('authToken');
			break;
		};

		return result;
	};
};
