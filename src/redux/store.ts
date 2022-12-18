import {settingsReducer} from "./reducers/settings_reducer";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "./reducers/counter_reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const AppDispatch = () => useDispatch<AppDispatchType>()

// @ts-ignore
window.store = store