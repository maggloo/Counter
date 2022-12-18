import React, {useEffect} from 'react';
import s from "./ShowSettings.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
    getMaxValueFromLSTC,
    getStartValueFromLSTC,
    setMaxValueToLSTC,
    setStartValueToLSTC,
    toggleSetButtonSetAC
} from "../../redux/reducers/settings_reducer";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../redux/store";
import {setCounterValueAC, setMessageAC} from "../../redux/reducers/counter_reducer";

const Settings = () => {

    const message = useSelector<AppRootStateType, string>(state => state.counter.message)
    const maxInputValue = useSelector<AppRootStateType, number>(state => state.settings.maxInputValue);
    const startInputValue = useSelector<AppRootStateType, number>(state => state.settings.startInputValue);
    const isDisabled = useSelector<AppRootStateType, boolean>(state => state.settings.idDisabled);


    useEffect(() => {
        dispatch(getStartValueFromLSTC());
        dispatch(getMaxValueFromLSTC());
    }, [])

    const dispatch = AppDispatch();

    const setMaxValue = (value: number) => {
        dispatch(setMaxValueToLSTC(value))
    }

    const setStartValue = (value: number) => {
        dispatch(setStartValueToLSTC(value));
        dispatch(setCounterValueAC(value));
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