export type SettingsReducerInitialType = {
    maxInputValue: number,
    startInputValue: number,
    idDisabled: boolean
}

const start = localStorage.getItem('startValue')
const max = localStorage.getItem('maxValue')

const settingsReducerInitialState: SettingsReducerInitialType = {
    maxInputValue: max? +max : 5,
    startInputValue: start? +start : 0,
    idDisabled: false
}


export const settingsReducer = (state = settingsReducerInitialState, action: ActionTypes): SettingsReducerInitialType => {
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

type SetMaxValueAT = ReturnType<typeof setMaxValueAC>;
type SetStartValueAT = ReturnType<typeof setStartValueAC>;
type ToggleSetButtonSetAT = ReturnType<typeof toggleSetButtonSetAC>;

type ActionTypes = SetMaxValueAT | SetStartValueAT | ToggleSetButtonSetAT


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