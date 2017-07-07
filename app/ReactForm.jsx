import React from 'react'
import { connect } from 'react-redux'
import 'ace-css/css/ace.min.css'
import { Redirect } from 'react-router-dom'
import { loginRequest, setForm } from './reduxActions'

export class ReactForm extends React.Component {

  _updateFormState = (form) => {
    return (event) => {
      this.props.setForm({[form]: event.target.value})
    }
  }

  _submitForm = () => {
    const { user, password } = this.props
    const { loginRequest } = this.props
    const body = { user, password}
    console.log('loginRequest called with', body)
    loginRequest(body)
  }

  render () {
    return (
      <div className='flex flex-column items-center'>
        <div className='md-col-4'>
          <div className='m1 h4 self-start'>Email</div>
          <input
            onChange={this._updateFormState('user')}
            type='user'
            style={{width: '100%'}}
            className='p2 h4'
        />
          <div className='m1 h4 self-start'>Password</div>
          <input
            onChange={this._updateFormState('password')}
            type='password'
            style={{width: '100%'}}
            className='p2 h4'
        />
          <div>
            <button
              className='mt2 btn-primary btn btn-big'
              onClick={() => this._submitForm()}
          >
            Connect
          </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    password: state.password,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: credentials => dispatch(loginRequest(credentials)),
    setForm: newValue => dispatch(setForm(newValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactForm)
