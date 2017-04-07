import React from 'react'
import { ChatForm, ChatList } from './components'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chatlist: [],
      nickname: 'anonymous',
      text: ''
    }
  }
  render () {
    return (
      <div>
        <ChatForm nickname={this.state.nickname} />
        <ChatList />
      </div>
    )
  }
}
export default App
