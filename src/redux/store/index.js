import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer, {initialState} from '../reducers/index';

// const loggerMiddleware = createLogger();

// export default function configureStore(preloadedState){
//     return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware))
// }

 function configureStore(initialState) {
    const store = createStore(reducer, initialState)
    return store
  }
const store = configureStore();

export default store;