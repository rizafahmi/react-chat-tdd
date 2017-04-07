import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
const setup = () => {
  const wrapper = shallow(<App />)
  return wrapper
}
it('renders <ChatForm />', () => {
  const app = setup()
  const actual = app.find('ChatForm').length
  expect(actual).toEqual(1)
})
it('renders <ChatList />', () => {
  const app = setup()
  const actual = app.find('ChatList').length
  expect(actual).toEqual(1)
})
it('has empty array for chat list initial state')
it('has anonymous as initial state for nickname')
it('has empty string as chat text initial state')
