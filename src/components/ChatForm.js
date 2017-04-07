import React from 'react'

const ChatForm = (props) => {
  return (
    <form>
      <input />
      <input />
      <button>Send</button>
    </form>
  )
}

ChatForm.propTypes = {
  nickname: React.PropTypes.string.isRequired
}

export default ChatForm
