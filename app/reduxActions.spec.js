import * as actions from './reduxActions'
import axios from 'axios'

describe('actions', () => {
  test('setForm should create an action to set the form state', () => {
    const field = { user: 'Morty' }
    const anotherField = { password: 'TheMortiest' }
    const expectedAction = {
      type: 'SET_FORM',
      newValue: {
        user: 'Morty'
      }
    }
    const anotherExpectedAction = {
      type: 'SET_FORM',
      newValue: {
        password: 'TheMortiest'
      }
    }
    expect(actions.setForm(field)).toEqual(expectedAction)
    expect(actions.setForm(anotherField)).toEqual(anotherExpectedAction)
  })

  test('attemptLogin should be a simple action', () => {

    const expectedAction = {
      type: 'ATTEMPT_LOGIN',
    }

    expect(actions.attemptLogin()).toEqual(expectedAction)
  })

  test('loginSuccess should include response data', () => {
    const input = {data: 'its the response data' }
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
      response: 'its the response data'
    }
    expect(actions.loginSuccess(input)).toEqual(expectedAction)
  })

  test('loginFailure should include error', () => {
    const input = 'oh no an error!'

    const expectedAction = {
      type: 'LOGIN_FAILURE',
      error: 'oh no an error!'
    }
    expect(actions.loginFailure(input)).toEqual(expectedAction)
  })
})

describe( 'async actions', () => {
  test('A successful call of loginRequest creates and ATTEMPT_LOGIN action and then LOGIN_SUCCESS', async () => {
    const expected = [{type: 'ATTEMPT_LOGIN'}, {response: 'Login successful!', type: 'LOGIN_SUCCESS'}]

    // mocking the axios put function so that it will just resolve the promise
    axios.put = jest.fn((url) => Promise.resolve({data: 'Login successful!'}))

    // mocking the dispatch function from Redux Thunk
    const dispatch = jest.fn()

    await actions.loginRequest({username: 'Morty', password: 'The Mortiest'})(dispatch)
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0])
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1])
  })
})
