export type counterReducerInitialStateType = {
    counter: number,
    message: string
}

const counterReducerInitialState: counterReducerInitialStateType = {
    counter: 0,
    message: ''
}

export const counterReducer = (state = counterReducerInitialState, action: ActionTypes): counterReducerInitialStateType => {
    switch (action.type) {
        case "SET_COUNTER_VALUE":
            return {...state, counter: action.counterVal}
        case "SET_MESSAGE_VALUE":
            return {...state, message: action.message}
        default:
            return state
    }

}


type setCounterValueAT = ReturnType<typeof setCounterValueAC>;
type setMessageAT = ReturnType<typeof setMessageAC>;
type ActionTypes = setCounterValueAT | setMessageAT

export const setCounterValueAC = (counterVal: number) => {
    return {
        type: 'SET_COUNTER_VALUE',
        counterVal
    } as const
}

export const setMessageAC = (message: string) => {
    return {
        type: 'SET_MESSAGE_VALUE',
        message
    } as const
}
