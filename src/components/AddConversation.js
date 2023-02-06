import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addID} from '../store/chatSlice';

function AddConversation(props) {

    const items = useSelector((state) => state.chat);
    // console.log(items[0].allFriends[0]);

    const dispatch = useDispatch();

    //Adding new data in redux state, if clicked
    const setChatID = (item) => {
        dispatch(addID({
        chatID: item.id,
        name: item.name,
        picture: item.picture
        })) 
        props.setAdd(false);
        // console.log('clicked on:', item.name)
    }
    return (
        <div className='add-convo'>
            {items[0].allFriends.map((item, index) => {
                return (
                    <div key={index} onClick={() => setChatID(item)} className='new-contact'>
                        <img src={item.picture}></img>
                        <p>{item.name}</p>
                    </div>
                )
            })}

        </div>
    )
    }

export default AddConversation;