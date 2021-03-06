// This reducer will store our list of skills in the reduxStore
const setSkillsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SKILLS':
            return action.payload;
        default:
            return state;
    }
}

export default setSkillsReducer;