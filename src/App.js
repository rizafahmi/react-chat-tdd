import React from 'react'
import { ChatForm, ChatList } from './components'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chatlist: [],
      nickname: 'anonymous'
    }
  }
  render () {
    return (
      <div>
        <ChatForm />
        <ChatList />
      </div>
    )
  }
}
export default App
