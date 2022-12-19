import {SettingsReducerInitialType} from "../redux/reducers/settings_reducer";


export const loadState = () => {
    try {
        const valueState = localStorage.getItem('app');
        if (!valueState) {
            return undefined;
        }
        return JSON.parse(valueState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: { settings: SettingsReducerInitialType }) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app', serializedState);
    } catch {
        // ignore write errors
    }
};