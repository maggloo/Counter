export type CounterReducerInitialStateType = {
    counter: number,
    message: string
}

const counterReducerInitialState: CounterReducerInitialStateType = {
    counter: 0,
    message: ''
}

export const counterReducer = (state = counterReducerInitialState, action: ActionTypes): CounterReducerInitialStateType => {
    switch (action.type) {
        case "SET_COUNTER_VALUE":
            return {...state, counter: action.counter}
        case "SET_MESSAGE_VALUE":
            return {...state, message: action.message}
        default:
            return state
    }

}


type SetCounterValueAT = ReturnType<typeof setCounterValueAC>;
type SetMessageAT = ReturnType<typeof setMessageAC>;
type ActionTypes = SetCounterValueAT | SetMessageAT

export const setCounterValueAC = (counter: number) => {
    return {
        type: 'SET_COUNTER_VALUE',
        counter
    } as const
}

export const setMessageAC = (message: string) => {
    return {
        type: 'SET_MESSAGE_VALUE',
        message
    } as const
}
