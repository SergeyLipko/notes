import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {getNotes, addNote, deleteNote} from '../../../api';
import {
  NOTES_REQUEST, ADD_NOTE, REMOVE_NOTE,
  setNotes} from './';

function * watchNoteRequest(){
  yield takeLatest(NOTES_REQUEST, notesRequest)
}
function * notesRequest(){
  try{
    // let _userId = localStorage.getItem('user');
    let response = yield getNotes();
    console.log('response in saga', response);

    // yield put(setNotes(response));
  } catch(err){
    console.log('Notes request error', err);
  }
}

function * watchNoteAdding(){
  yield takeLatest(ADD_NOTE, noteAdding)
}
function * noteAdding(action){
  try{
    let _userId = localStorage.getItem('user');
    yield addNote(action.payload, _userId);
    yield notesRequest();
  } catch(err){
    console.log('Note adding error', err);
  }
}

function * watchNoteRemoving(){
  yield takeLatest(REMOVE_NOTE, noteRemoving)
}
function * noteRemoving(action){
  try{
    yield deleteNote(action.payload);
    yield notesRequest();
  } catch(err){
    console.log('Note removing error', err);
  }
}

export default [
  watchNoteRequest,
  watchNoteAdding,
  watchNoteRemoving,
];
