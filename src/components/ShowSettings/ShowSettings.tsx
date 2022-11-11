import React, {useEffect, useState} from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";
import s from "./ShowSettings.module.css";


type ShowSettingsPropsType = {
    callback: () => void,
    maxInputValue: number
    startInputValue: number
    setMaxValue:  (value: number) => void
    setStartValue:  (value: number) => void
    disabled: boolean
    message: string
}

const ShowSettings = (props: ShowSettingsPropsType) => {


    const saveValue = () => {
        localStorage.setItem('maxValue', JSON.stringify(props.maxInputValue));
        localStorage.setItem('startValue', JSON.stringify(props.startInputValue));
        props.callback();
    }

    const onChangeHandler = (value: number, name: string) => {
        name === 'max' ? props.setMaxValue(value) : props.setStartValue(value)
    }

    return (
        <div className="wrapper">
            <div className={s.inputWrapper}>
                <Input title={'max value'} callback={(value) => onChangeHandler(value, 'max')} value={props.maxInputValue} message={props.message}/>
                <Input title={'start value'} callback={(value) => onChangeHandler(value, 'start')} value={props.startInputValue} message={props.message}/>
            </div>
            <div className='buttons-wrapper'>
                <Button name={'set'}
                        callBack={saveValue}
                        disabled={props.disabled}
                />
            </div>
        </div>
    );
};

export default ShowSettings;