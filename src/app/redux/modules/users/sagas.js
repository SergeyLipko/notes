import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { addUser, loginUser } from '../../../api';
import {
  ADD_USER, LOGIN_USER, setUser, setError, clearError,
  authenticateUser, LOG_OUT, clearUser
} from './';
import { browserHistory } from 'react-router';




function * watchUserAdding(){
  yield takeLatest(ADD_USER, userAdding);
}
function * userAdding(action){
  try{
    yield addUser(action.payload);
    console.log('User has been successfully created');
  } catch (err){
    console.log('User adding error', err);
  }
}



function * watchUserLogin(){
  yield takeLatest(LOGIN_USER, userLogin)
}
function * userLogin(action){
  try{
    let user = yield loginUser(action.payload);
    if(user.success){
      yield put(clearError());
      yield put(authenticateUser());

      localStorage.setItem('user', user.userId);
      localStorage.setItem('token', user.token);
      yield browserHistory.push('/notes');
    } else {
      yield put(setError(user.errorMessage));
    }

  } catch(err) {
    console.log('Saga authentication failure', err);
  }
}



function * watchUserLogOut(){
  yield takeLatest(LOG_OUT, userLogOut);
}
function * userLogOut(){
  yield put(clearUser());
  localStorage.removeItem('token');
}


export default [
  watchUserAdding,
  watchUserLogin,
  watchUserLogOut
]
