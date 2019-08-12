// This reducer will store our list of skills in the reduxStore
const showFriendsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FRIENDS':
            return action.payload;
        default:
            return state;
    }
}

export default showFriendsReducer;