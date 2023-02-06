import React, { useState } from 'react';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import ChatLogs from './ChatLogs';
import {addChatLog} from '../store/chatSlice';

function RightPanel() {

  //using useSelector hook to fetch state from redux

  const items = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  //handling send message through this function

  const handleSendMessage = (e) => {
    e.preventDefault();
    // console.log('text: ',text);
    let date = Date();
    let time = date.slice(16, 21);
    if(text != ""){
      dispatch(addChatLog({"text": text, "timestamp": time}));
    }
    else{
      alert("Cannot send blank messages");
    }

    setText("");
  };

  return (

    <div className='right-panel'>
        <Header />
        <div className='scroll'>
          
        {/* if there is data in items[0] and items[1], then redner below, else ""(nothing) */}
        {items[0] && items[1] ?items[0].friends.map((item, index) => {
          if(item.id == items[1].chatID ){
             return (
              <div key={index}>
              {item.chatlog.map((chatLog, index) => {
                return(
                  <div>
                    <ChatLogs item={chatLog} key={index} />
                  </div>
                ) 
              })}
              </div>
             )
          }
        }):<div className='empty-convo'>
            <h1>Select a Conversation..</h1>
          </div>
        }
        
        </div>
        {items[1]?
        <div className='message-input-div'>
          <form onSubmit={handleSendMessage}>
            <input id='inputtag' value={text} autoComplete='off'
              onChange={ (e) => {
                setText(e.target.value); 
                }
              } 
              placeholder='Type your message here'
            />
            <button>
              Send
            </button>
          </form>
        </div>:""}
    </div>
  )
}

export default RightPanel;