import React from 'react';
import { useSelector } from 'react-redux';

function Header() {

  const items = useSelector((state) => state.chat);

  return (
    <div className='header'>
      
      
       {items[1]?
       <div className='header-child-div'>
        <img  src={items[1].picture} />
        <h2>{items[1].name}</h2>
       </div>
       :""} 
      
        
    </div>
  )
}

export default Header;