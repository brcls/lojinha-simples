const INITIAL_STATE = {
    user: [],
};

export default function usuario(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state, user: [...state.user, action.user]
            };
        default:
            return state;
    }
}