import {combineReducers, createStore, applyMiddleware} from 'redux';
import profileReducer from './reducers/profile-reducer';
import friendsReducer from './reducers/friends-reducer';
import homeReducer from './reducers/home-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  homePage: homeReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
