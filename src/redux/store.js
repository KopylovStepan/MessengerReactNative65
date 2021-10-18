import {combineReducers, createStore, applyMiddleware} from 'redux';
import profileReducer from './reducers/profile-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
