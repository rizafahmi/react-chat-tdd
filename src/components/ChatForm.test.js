import React from 'react'
import { shallow } from 'enzyme'

import { ChatForm } from './index'

let app

const setup = () => {
  const wrapper = shallow(<ChatForm />)
  return wrapper
}

beforeEach(() => {
  app = setup()
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
  it('should have a send button')
  it('received nickname as a prop')
  describe('Handle Form Submit', () => {
    it('should called handleFormSubmit when for is submitted')
    it('should append chat list after submisson')
    it('should emptying chat text after submission')
  })
})
