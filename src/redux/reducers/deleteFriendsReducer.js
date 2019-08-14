const deleteFriendsReducer = (state = [], action) => {
    switch (action.type) {
        case 'DELETE_FRIENDS':
            return action.payload;
        default:
            return state;
    }
}

export default deleteFriendsReducer;