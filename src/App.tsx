import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import s from "./components/ShowSettings/ShowSettings.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {
    setMaxValueAC,
    setStartValueAC,
    settingsReducerInitialType,
    toggleSetButtonSetAC
} from "./reducers/settings_reducer";
import {counterReducerInitialStateType, setCounterValueAC, setMessageAC} from "./reducers/counter_reducer";

export let STEP = 1;

function App() {

   /* const startInputValFromLS = localStorage.getItem('startValue');
    const maxInputValFromLS = localStorage.getItem('maxValue');*/

    const settings = useSelector<AppRootStateType, settingsReducerInitialType>(state => state.settings)
    const counterObj = useSelector<AppRootStateType, counterReducerInitialStateType>(state => state.counter)
    const dispatch = useDispatch();



    useEffect(() => {
        /*localStorage.setItem('maxValue', JSON.stringify(maxInputValue));
        localStorage.setItem('startValue', JSON.stringify(startInputValue));*/
        dispatch(setCounterValueAC(settings.startInputValue));
        btnDisabling();
    }, [settings.maxInputValue, settings.startInputValue]);


    const saveValue = () => {
        dispatch(setMessageAC(''));
        dispatch(toggleSetButtonSetAC(true))
    }

    const btnDisabling = () => {
        if (settings.maxInputValue <= settings.startInputValue
            || settings.maxInputValue < 0
            || settings.startInputValue < 0
        ) {
            dispatch(setMessageAC('Incorrect value!'));
            dispatch(toggleSetButtonSetAC(true))
        } else {
            dispatch(setMessageAC('enter values and press \'set\''));
            dispatch(toggleSetButtonSetAC(false));
        }
    }

    const setMaxValue = (value: number) => {
        dispatch(setMaxValueAC(value))
    }

    const setStartValue = (value: number) => {
        dispatch(setStartValueAC(value))
    }

    const onChangeHandler = (value: number, name: string) => {
        name === 'max' ? setMaxValue(value) : setStartValue(value)
    }

    const incrementCounter = () => {
        if (counterObj.counter < settings.maxInputValue
            && counterObj.counter >= 0) {
            dispatch(setCounterValueAC(counterObj.counter + STEP));
        }
    }

    const resetCounter = () => {
        dispatch(setCounterValueAC(settings.startInputValue));
    }


    return (
        <div className="App">

            <div className="wrapperLeft">
                <div className={s.inputWrapper}>
                    <Input title={'max value'} callback={(value) => onChangeHandler(value, 'max')} value={settings.maxInputValue}
                           message={counterObj.message}/>
                    <Input title={'start value'} callback={(value) => onChangeHandler(value, 'start')}
                           value={settings.startInputValue} message={counterObj.message}/>
                </div>
                <div className='buttons-wrapper'>
                    <Button name={'set'}
                            callBack={saveValue}
                            disabled={settings.idDisabled}
                    />
                </div>
            </div>
            <div className='wrapperRight'>
                <Counter counter={counterObj.message ? counterObj.message : counterObj.counter} maxVal={settings.maxInputValue}/>
                <div className='buttons-wrapper'>
                    <Button name={'inc'}
                            callBack={incrementCounter}
                            disabled={(!!counterObj.message) || counterObj.counter === settings.maxInputValue}
                    />
                    <Button name={'reset'}
                            callBack={resetCounter}
                            disabled={(!!counterObj.message)}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
