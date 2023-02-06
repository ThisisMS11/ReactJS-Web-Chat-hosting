import React, {useEffect, useState} from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import file from '../data';

import { useDispatch, useSelector } from 'react-redux';

import { add } from '../store/chatSlice';


function ChatApp() {

  const dispatch = useDispatch();

  //using dispatch method of redux toolkit to add data in redux

  useEffect(()=>{
    dispatch(add(file));
  },[])
  
  //Fetching state from redux
  const data = useSelector((state) => state.chat[0]);
  

  return (
    <div className='chat-app'>
        
        <LeftPanel data2={data}/>
        <RightPanel /> 
        
    </div>
  )
}

export default ChatApp;