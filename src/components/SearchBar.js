import React, {useState} from 'react';

function SearchBar(props) {

  const handleSearchInput = (e) => {
    props.setSearchInput(e.target.value);
    console.log(props.SearchInput);
  }
  return (
    <div className='search-bar'>
        
        <input type='search' placeholder=' Type The Name for Conversation' onChange={handleSearchInput}/>
  
    </div>
  );
}


export default SearchBar;