import React from 'react';
import { useDispatch } from 'react-redux';
import {addID} from '../store/chatSlice';

function ChatLog(props) {

  const dispatch = useDispatch();

  //Adding new data in redux state, if clicked
  const setChatID = () => {
    dispatch(addID({
      chatID: props.item.id,
      name: props.item.name,
      picture: props.item.picture
    })) 
  }

  return (
    <div className='chat-log' 
      onClick={() => {
        setChatID();
        console.log('Clicked on:', props.item. name)
      }
      } 
    >
      {/* {props.item.chatlog[0]? */}
      <div className='img-div'>
      <img  src={props.item.picture}></img>
      </div>
      
      <div className='name-div'>
        <p style={{fontWeight: 'bold'}}>{props.item.name}</p>
        <p>{props.item.chatlog[props.item.chatlog.length - 1].text}</p>
      </div>

      <div className='time-div'>
        {/* <p>{props.item.latest_timestamp}</p> */}
        <p>{props.item.chatlog[props.item.chatlog.length - 1].timestamp}</p>
      </div>
       {/* :""} */ }
    </div>
  )
}

export default ChatLog;
