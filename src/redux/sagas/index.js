import {fork, all, spawn, call} from 'redux-saga/effects';
import {profileSagaInfo, profileSagaPhotos} from './ProfileSaga';
import {friendsSaga} from './FriendsSaga';
import {peopleSaga, groupsSaga, groupsAndPeopleSaga} from './SearchSaga';
import {homeSaga, homeSagaLoadMore} from './HomeSaga';
import {postSaga} from './PostSaga';

export default function* rootSaga() {
  const sagas = [
    homeSagaLoadMore,
    profileSagaInfo,
    profileSagaPhotos,
    friendsSaga,
    peopleSaga,
    groupsSaga,
    groupsAndPeopleSaga,
    homeSaga,
    postSaga,
  ];

  const retrySagas = yield sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });

  yield all(retrySagas);
}
