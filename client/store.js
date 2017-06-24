import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import rootReducer from 'reducers/rootReducer';

const loggerMiddleware = createLogger()
let store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;