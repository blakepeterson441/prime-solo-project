// This reducer will store our list of skills in the reduxStore
const fetchSkillsReducer = (state =[], action) => {
    switch (action.type){
        case 'FETCH_SKILLS':
            return action.payload;
        default:
            return state;
    }
}

export default fetchSkillsReducer;