import {settingsReducer} from "./reducers/settings_reducer";
import {AnyAction, combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "./reducers/counter_reducer";
import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {loadState, saveState} from "../utils/localStorageUtils";


const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})

//if needed thunks, add applyMiddleware(thunk) as a third parameter
export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        settings: store.getState().settings
    });
});

export type AppRootStateType = ReturnType<typeof rootReducer>

type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const AppDispatch = () => useDispatch<AppDispatchType>()

// @ts-ignore
window.store = store