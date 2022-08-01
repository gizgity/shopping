import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { logMiddleware } from './middleware/logger';

import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reduces';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [
  process.env.NODE_ENV !== 'production' && logMiddleware, thunk
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWare));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
