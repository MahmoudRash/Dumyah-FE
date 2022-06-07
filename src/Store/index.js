import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './Reducer';

const middlewares = applyMiddleware(thunk);

const store = createStore(dataReducer, middlewares);
export { store } 