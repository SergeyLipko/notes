import {createAction, handleActions} from 'redux-actions';

const INITIAL_STATE = {
  notes: [],
};

export const NOTES_REQUEST = 'notes/NOTES_REQUEST';
export const notesRequest = createAction(NOTES_REQUEST);

export const SET_NOTES = 'notes/SET_NOTES';
export const setNotes = createAction(SET_NOTES);

export const ADD_NOTE = 'notes/ADD_NOTE';
export const addNote = createAction(ADD_NOTE);

export const REMOVE_NOTE = 'notes/REMOVE_NOTE';
export const removeNote = createAction(REMOVE_NOTE);


export default handleActions({

  [SET_NOTES]: (state, action) => ({
    ...state,
    notes: [...action.payload]
  }),

}, INITIAL_STATE);
