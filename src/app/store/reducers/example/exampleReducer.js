const INITIAL_STATE = {
    exampleState: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EXAMPLE':
            return {
                ...state,
                exampleState: action.payload.exampleState
            }
        default:
            return state
    }
}