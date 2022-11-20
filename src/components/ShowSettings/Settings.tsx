import React from 'react';
import s from "./ShowSettings.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
    setMaxValueAC,
    setStartValueAC,
    toggleSetButtonSetAC
} from "../../reducers/settings_reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {setMessageAC} from "../../reducers/counter_reducer";

const Settings = () => {

    const message = useSelector<AppRootStateType, string>(state => state.counter.message)
    const maxInputValue = useSelector<AppRootStateType, number>(state => state.settings.maxInputValue);
    const startInputValue = useSelector<AppRootStateType, number>(state => state.settings.startInputValue);
    const isDisabled = useSelector<AppRootStateType, boolean>(state => state.settings.idDisabled);

    const dispatch = useDispatch();
    const setMaxValue = (value: number) => {
        // localStorage.setItem('maxValue', JSON.stringify(value));
        dispatch(setMaxValueAC(value))
    }

    const setStartValue = (value: number) => {
        // localStorage.setItem('startValue', JSON.stringify(value));
        dispatch(setStartValueAC( value))
    }

    const onChangeHandler = (value: number, name: string) => {
        name === 'max' ? setMaxValue(value) : setStartValue(value)
    }
    const saveValue = () => {
        dispatch(setMessageAC(''));
        dispatch(toggleSetButtonSetAC(true))
    }

    return (
        <div className="wrapperLeft">
            <div className={s.inputWrapper}>
                <Input title={'max value'} callback={(value) => onChangeHandler(value, 'max')} value={maxInputValue}
                       message={message}/>
                <Input title={'start value'} callback={(value) => onChangeHandler(value, 'start')}
                       value={startInputValue} message={message}/>
            </div>
            <div className='buttons-wrapper'>
                <Button name={'set'}
                        callBack={saveValue}
                        disabled={isDisabled}
                />
            </div>
        </div>
    );
};

export default Settings;