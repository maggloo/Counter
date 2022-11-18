export type settingsReducerInitialType = {
    maxInputValue: number,
    startInputValue: number,
    idDisabled: boolean
}

const settingsReducerInitialState: settingsReducerInitialType = {
    maxInputValue: 5,
    startInputValue: 0,
    idDisabled: false
}


export const settingsReducer = (state = settingsReducerInitialState, action: ActionTypes): settingsReducerInitialType => {
    switch (action.type) {
        case "SET_MAX_VALUE":
            return {...state, maxInputValue: action.maxValue}
        case "SET_START_VALUE":
            return {...state, startInputValue: action.startValue}
        case "TOGGLE_BUTTON":
            return {...state, idDisabled: action.isDisabled}
        default:
            return state
    }

}

type setMaxValueAT = ReturnType<typeof setMaxValueAC>;
type setStartValueAT = ReturnType<typeof setStartValueAC>;
type toggleSetButtonSetAT = ReturnType<typeof toggleSetButtonSetAC>;

type ActionTypes = setMaxValueAT | setStartValueAT | toggleSetButtonSetAT


export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        maxValue
    } as const
}

export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET_START_VALUE',
        startValue
    } as const
}

export const toggleSetButtonSetAC = (isDisabled: boolean) => {
    return {
        type: 'TOGGLE_BUTTON',
        isDisabled
    } as const
}