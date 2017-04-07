import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

let app

const setup = () => {
  const wrapper = shallow(<App />)
  return wrapper
}
beforeEach(() => {
  app = setup()
})
it('renders <ChatForm />', () => {
  const actual = app.find('ChatForm').length
  expect(actual).toEqual(1)
})
it('renders <ChatList />', () => {
  const actual = app.find('ChatList').length
  expect(actual).toEqual(1)
})
it('has empty array for chat list initial state', () => {
  const actual = app.state('chatlist').length
  expect(actual).toEqual(0)
})
it('has anonymous as initial state for nickname', () => {
  const actual = app.state('nickname')
  expect(actual).toEqual('anonymous')
})
it('has empty string as chat text initial state', () => {
  const actual = app.state('text')
  expect(actual).toBeDefined()
  expect(actual).toEqual(0)
})
it('should pass nickname to <ChatForm /> as props')
