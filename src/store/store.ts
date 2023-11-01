import {combineReducers, createStore} from 'redux';
import userReducer from './userReducer';
import {persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  userData: persistReducer(persistConfig, userReducer),
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
