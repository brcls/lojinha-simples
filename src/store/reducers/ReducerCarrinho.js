const INITIAL_STATE = {
    data: [],
};

export default function carrinho(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_CARRINHO':  
            return {
                ...state, data: [...state.data, action.item]
            };
        default:
            return state;
    }
}