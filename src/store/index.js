import { createStore } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import combinedReducers from '../reducers/combinedReducers';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };