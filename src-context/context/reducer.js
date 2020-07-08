export function reducer(state, action) {
    switch (action.type) {
        case "INCREASE_COUNTER":
            state.counter = state.counter + 1
            return { ...state }

        case "DECREASE_COUNTER":
            state.counter = state.counter - 1
            return { ...state }

        case "UPDATE_USERNAME":
            state.username = "new-myUserName"
            return { ...state }

        default:
            return state
    }
}