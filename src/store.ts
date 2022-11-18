import {settingsReducer} from "./reducers/settings_reducer";
import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "./reducers/counter_reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store