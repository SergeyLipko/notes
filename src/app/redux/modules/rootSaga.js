import { fork } from 'redux-saga/effects';
import notes from './notes/sagas';
import users from './users/sagas';

const forkEm = saga => fork(saga);

export default function * rootSaga(){
  yield [
    ...users,
    ...notes,
  ].map(forkEm)
}