const INITIAL_STATE = {
    exempleState: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EXEMPLE':
            return {
                ...state,
                exempleState: action.payload.exempleState
            }
        default:
            return state
    }
}