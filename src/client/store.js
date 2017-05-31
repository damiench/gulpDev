import { createStore } from 'redux';
import TShirtApp from './reducers/reducer';
let store = createStore(TShirtApp);

export default store;