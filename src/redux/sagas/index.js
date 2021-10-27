import {fork, all, spawn, call} from 'redux-saga/effects';
import profileSagaInfo from './ProfileSaga';

export default function* rootSaga() {
  const sagas = [profileSagaInfo];

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
