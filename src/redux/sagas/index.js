import {fork, all, spawn, call} from 'redux-saga/effects';
import {profileSagaInfo, profileSagaPhotos} from './ProfileSaga';
import {friendsSaga} from './FriendsSaga';
import {peopleSaga, groupsSaga, groupsAndPeopleSaga} from './SearchSaga';

export default function* rootSaga() {
  const sagas = [
    profileSagaInfo,
    profileSagaPhotos,
    friendsSaga,
    peopleSaga,
    groupsSaga,
    groupsAndPeopleSaga,
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
