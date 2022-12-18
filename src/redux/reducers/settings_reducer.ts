import {Dispatch} from "redux";
import {setCounterValueAC} from "./counter_reducer";

export type SettingsReducerInitialType = {
    maxInputValue: number,
    startInputValue: number,
    idDisabled: boolean
}

const settingsReducerInitialState: SettingsReducerInitialType = {
    maxInputValue: 5,
    startInputValue: 0,
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


//thunk

export const setStartValueToLSTC = (startValue: number) => (dispatch: Dispatch) => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
    dispatch(setStartValueAC(startValue));
}

export const setMaxValueToLSTC = (maxValue: number) => (dispatch: Dispatch) => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    dispatch(setMaxValueAC(maxValue))
}

export const getStartValueFromLSTC = () => (dispatch: Dispatch) => {
    const start = localStorage.getItem('startValue');
    if (start) {
        let newVal = JSON.parse(start);
        dispatch(setStartValueAC(newVal));
        dispatch(setCounterValueAC(newVal));
    }
}

export const getMaxValueFromLSTC = () => (dispatch: Dispatch) => {
    const start = localStorage.getItem('maxValue');
    if (start) {
        let newVal = JSON.parse(start);
        dispatch(setMaxValueAC(newVal))
    }
}
