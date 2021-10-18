import {combineReducers, createStore, applyMiddleware} from 'redux';
import profileReducer from './reducers/profile-reducer';
import friendsReducer from './reducers/friends-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
