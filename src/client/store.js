import { createStore, applyMiddleware } from 'redux';
import orderMiddleware from './utils/middlewares/order';
import authMiddleware from './utils/middlewares/auth';
import TShirtApp from './reducers/reducer';
import initState from './utils/getInitialState';

const createStoreWithMiddleware = applyMiddleware(orderMiddleware, authMiddleware)(createStore);

const store = createStoreWithMiddleware(
    TShirtApp,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
