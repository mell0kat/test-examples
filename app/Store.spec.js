import { loginReducer } from './Store'

const initialState = {
  fetching: false,
  loggedIn: false,
  user: "",
  password: "",
  errorMsg: "",
}

describe('The reducer', () => {
  test('it should return the initial state', () => {
    const initialState = {
      fetching: false,
      loggedIn: false,
      user: "",
      password: "",
      errorMsg: "",
    }
    expect(loginReducer(undefined, {})).toEqual(initialState)
  })

  test('it should handle ATTEMPT_LOGIN', () => {
    expect(loginReducer(initialState, { type: 'ATTEMPT_LOGIN'}))
           .toEqual({...initialState, fetching: true})
  })


  test('it should handle LOGIN_SUCCESS', () => {
    expect(loginReducer(initialState, { type: 'LOGIN_SUCCESS'}))
      .toEqual({...initialState, fetching: false, loggedIn: true})
  })

  test('it should handle LOGIN_FAILURE', () => {
    expect(loginReducer(initialState, { type: 'LOGIN_FAILURE', error: 'Failing failures!'}))
      .toEqual({...initialState, errorMsg: 'Failing failures!', fetching: false})
  })

  test('it should default to the current state where the action.type is not recognized', () => {
    expect(loginReducer(initialState, { type: 'COCONUTS'}))
      .toEqual(initialState)
  })

})
