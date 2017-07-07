import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  fetching: false,
  loggedIn: false,
  user: "",
  password: "",
  errorMsg: "",
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORM':
      return {...state, ...action.newValue}
    case 'ATTEMPT_LOGIN':
      return {...state, fetching: true}
    case 'LOGIN_SUCCESS':
    return {...state, fetching: false, loggedIn: true }
    case 'LOGIN_FAILURE':
      return { ...state, errorMsg: action.error, fetching: false }
    default:
      return state
  }
}

export default createStore(loginReducer, applyMiddleware(thunkMiddleware))
