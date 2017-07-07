import React from 'react'
import { shallow } from 'enzyme'
import { ReactForm } from './ReactForm'

describe('The <ReactForm />', () => {
  test('should render two <input /> elements', () => {
    const wrapper = shallow(<ReactForm />)
    expect(wrapper.find('input')).toHaveLength(2)
  })

  test('should render a <button /> element', () => {
    const wrapper = shallow(<ReactForm />)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  test('the first input should set the state at "user"', () => {
    const userTest = {target: {value: 'Morty'}}
    const props = { setForm: jest.fn() }
    const wrapper = shallow(<ReactForm {...props} />)
    wrapper.find('input').at(0).simulate('change', userTest)
    expect(props.setForm).toHaveBeenCalledWith({'user': 'Morty'})
  })

  test('the second input should set the state at "password"', () => {
    const passwordTest = {target: {value: 'The Mortiest'}}
    const props = { setForm: jest.fn() }
    const wrapper = shallow(<ReactForm {...props} />)
    wrapper.find('input').at(1).simulate('change', passwordTest)
    expect(props.setForm).toHaveBeenCalledWith({'password': 'The Mortiest'})
  })

  test('the submit button should call the loginRequest function', () => {
    const props = { loginRequest: jest.fn() }
    const wrapper = shallow(<ReactForm {...props} />)
    wrapper.find('button').simulate('click')
    expect(props.loginRequest).toHaveBeenCalled()
  })
})
