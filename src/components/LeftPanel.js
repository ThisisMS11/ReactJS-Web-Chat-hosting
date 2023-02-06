import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ChatLog from './ChatLog';
import AddConversation from './AddConversation';

function LeftPanel(props) {

  const [add, setAdd] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  //Add Conversation function
  const handleAdd = () => {
    if(add){
    setAdd(false);
    }
    else{
      setAdd(true);
    }
  };

  const {data2} = props;
  
  return (
    <div className='left-panel'>
        <div className='left-header'>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <button onClick={handleAdd}> + </button>
        {add?<AddConversation setAdd={setAdd} />:""}
        </div>
        <h5>CONVERSATIONS</h5>

      {/* if there is data present in data2 then render Chatlog component for all having chatlog array length greater than 0 */}
        {data2?data2.friends
        .filter((val) => {
          if(searchInput == ''){
            return val;
          }

          else if(val.name.toLowerCase().includes(searchInput.toLowerCase())){
            return val;
          }
        })
        .map( (item, index) => {
          if(item.chatlog.length > 0){
          return <ChatLog item={item} key={index}/>
          }
        }):""}
    
    
    </div>


  )
}

export default LeftPanel;