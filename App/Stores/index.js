import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import DefaultState from '../Reducers/Default';
import Reducer from '../Reducers';
import rootSaga from '../Sagas';
import {LOG_OUT} from '../Actions/Keys';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = DefaultState;
  }
  return Reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

const index = configureStore();
const persistor = persistStore(index);

module.exports = {
  store: index,
  persistor,
};
