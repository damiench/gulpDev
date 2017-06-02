import { createStore, applyMiddleware } from 'redux';
import { orderMiddleware } from './socket-manage/socket-init';
import TShirtApp from './reducers/reducer';

const createStoreWithMiddleware = applyMiddleware(orderMiddleware)(createStore);
const store = createStoreWithMiddleware(TShirtApp);

export default store;