import React from 'react'

function ChatLogs(props) {
  return (
    <div className='chat-logs'>
        <p>
            {props.item.text}
        </p>
        <h6 style={{marginLeft: 8}}> {props.item.timestamp}</h6>
    </div>
  )
}

export default ChatLogs