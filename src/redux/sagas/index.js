import {fork, all, spawn, call} from 'redux-saga/effects';
import profileSaga from './ProfileSaga';

export default function* rootSaga() {
  const sagas = [profileSaga];

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
