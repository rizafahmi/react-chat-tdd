import React from 'react'

const ChatForm = (props) => {
  return (
    <form>
      <input />
      <input onChange={(event) => props.handleInputChange(event.target.value)} />
      <button>Send</button>
    </form>
  )
}

ChatForm.propTypes = {
  nickname: React.PropTypes.string.isRequired
}

export default ChatForm
