import { createStore } from 'redux';
import combinedReducers from '../reducers/combinedReducers';

const store = createStore(combinedReducers);

export default store;