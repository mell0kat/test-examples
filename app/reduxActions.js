import axios from 'axios'


export function setForm (newValue) {
  return {
    type: 'SET_FORM',
    newValue
  }
}

export function attemptLogin () {
  return {
    type: 'ATTEMPT_LOGIN'
  }
}
export function loginSuccess (response) {
  return {
    type: 'LOGIN_SUCCESS',
    response: response.data
  }
}

export function loginFailure (error) {
  return {
    type: 'LOGIN_FAILURE',
    error
  }
}

export function loginRequest (credentials) {
  return dispatch => {
    dispatch(attemptLogin())

    // No .catch below below because a server side error will not
    // reject the promise

    return axios.put('/api/v1', {
      data: credentials
    })
      .then(
        response => dispatch(loginSuccess(response)),
        error => dispatch(loginFailure(error))
      )
  }
}
