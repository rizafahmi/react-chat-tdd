import React from 'react'
import { mount, shallow } from 'enzyme'

import { ChatForm } from './index'
import App from './../App.js'

let app, wrappedComponent, appMount

const setup = () => {
  const props = {
    nickname: 'anonymous',
    text: '',
    handleSubmit: () => {}
  }
  const wrapper = mount(<ChatForm {...props} />)
  const appMount = mount(<App />)
  return { wrapper, appMount }
}

beforeEach(() => {
  wrappedComponent = setup()
  app = wrappedComponent.wrapper
  appMount = wrappedComponent.appMount
})

describe('Renders <ChatForm />', () => {
  it('should have a form', () => {
    const form = app.find('form')
    expect(form.length).toEqual(1)
  })
  it('should have text input for nickname and text', () => {
    const input = app.find('input')
    expect(input.length).toEqual(2)
  })
  it('received nickname as a prop', () => {
    const actual = app.prop('nickname')
    expect(actual).toEqual('anonymous')
  })
  it('should have a send button', () => {
    const actual = app.find('button')
    expect(actual.length).toEqual(1)
    expect(actual.text()).toEqual('Send')
  })
  it('input text should have prop onChange')
  it('input text trigger handleChange method', () => {
    const input = app.find('input').last()
    input.simulate('change', {
      event: {
        target: {
          value: 'Hi'
        }
      }
    })
    expect(appMount.state().text).toEqual('Hi')
  })

  describe('Handle Form Submit', () => {
    it('should called handleFormSubmit when form is submitted', () => {
      const handleFormSubmit = jest.fn()
      const form = shallow(<form onSubmit={() => handleFormSubmit()} />)
      expect(form.prop('onSubmit')).toBeDefined()
      form.simulate('submit')
      expect(handleFormSubmit).toBeCalled()
      const mountApp = mount(<App />)
      expect(mountApp.state().chatlist.length).toEqual(1)
    })
    it('should append chat list after submisson')
    it('should emptying chat text after submission')
  })
})
