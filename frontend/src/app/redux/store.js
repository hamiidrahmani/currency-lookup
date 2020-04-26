import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [thunk];

export default createStore(rootReducer, applyMiddleware(...middlewares));
