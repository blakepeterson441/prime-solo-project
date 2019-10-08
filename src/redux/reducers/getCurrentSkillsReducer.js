const getCurrentSkillsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_CURRENT_SKILLS':
            return action.payload;
        default:
            return state;
    }
}

export default getCurrentSkillsReducer;