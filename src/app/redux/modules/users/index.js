import {createAction, handleActions} from 'redux-actions';

const INITIAL_STATE = {
  isAuthenticated: false,
  authenticatedUser: null,
  authenticationError: null
};

export const AUTHENTICATE_USER = 'users/AUTHENTICATE_USER';
export const authenticateUser = createAction(AUTHENTICATE_USER);

export const ADD_USER = 'users/ADD_USER';
export const addUser = createAction(ADD_USER);

export const LOGIN_USER = 'users/LOGIN_USER';
export const loginUser = createAction(LOGIN_USER);

export const SET_USER = 'users/SET_USER';
export const setUser = createAction(SET_USER);

export const SET_ERROR = 'user/SET_ERROR';
export const setError = createAction(SET_ERROR);

export const CLEAR_ERROR = 'user/CLEAR_ERROR';
export const clearError = createAction(CLEAR_ERROR);

export const LOG_OUT = 'user/LOG_OUT';
export const logOut = createAction(LOG_OUT);

export const CLEAR_USER = 'user/CLEAR_USER';
export const clearUser = createAction(CLEAR_USER);


export default handleActions({

  [AUTHENTICATE_USER]: (state, action) => ({
    ...state,
    isAuthenticated: true
  }),

  [SET_USER]: (state, action) => ({
    ...state,
    authenticatedUser: action.payload
  }),

  [SET_ERROR]: (state, action) => ({
    ...state,
    authenticationError: action.payload
  }),

  [CLEAR_ERROR]: (state, action) => ({
    authenticationError: null
  }),

  [CLEAR_USER]: (state, action) => ({
    ...state,
    isAuthenticated: false,
    authenticatedUser: null
  })

}, INITIAL_STATE)
