import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import profileReducer from './reducers/profile-reducer';
import friendsReducer from './reducers/friends-reducer';
import homeReducer from './reducers/home-reducer';
import searchReducer from './reducers/search-reducer';
import postReducer from './reducers/post-reducer';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  homePage: homeReducer,
  searchPage: searchReducer,
  postPage: postReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
