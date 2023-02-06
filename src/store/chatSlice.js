const { createSlice } = require('@reduxjs/toolkit');

const chatSlice = createSlice({
    name: 'chat',
    initialState: {},
    reducers: {
        add(state, action) {
            // state.push(action.payload);
            return {...state, [0]: action.payload}
            // return {[0]: action.payload};
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        addID(state, action) {
        //    return state[0].chatID(action.payload);
        //    return state.filter((item) => {
        //     item.chatID = action.payload;
        //    });
        
        return { ...state, [1]: action.payload } // correct
        // return { ...state, state[1].chatID: action.payload }
        // return { chatID: action.payload, ...state  }
        
        // state.push(action.payload);
        },
        addChatLog(state, action) {
            let newState = state;
            let tempID = state[1].chatID; 
            // console.log('tempid',tempID);
            let newFriends = newState[0].friends;
            // console.log(newFriends);
            console.log('a',newFriends.length);
            for(let i =0;i<newFriends.length;i++){
                // console.log('a',newFriends[i].id);
                if(newFriends[i].id == tempID){
                    newFriends[i].chatlog.push(action.payload);
                    // console.log('ok');
                }
            }
            return newState;
    
        },
        
    },
});

export const { add, remove,addID, addChatLog } = chatSlice.actions;
export default chatSlice.reducer;