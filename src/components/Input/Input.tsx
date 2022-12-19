import React, {ChangeEvent, memo, useEffect, useState} from 'react';
import s from '../ShowSettings/ShowSettings.module.css'

type InputPropsType = {
    callback: (value: number) => void,
    value: number,
    title: string
    message?: string
}

const Input = (props: InputPropsType) => {

    let [value, setValue] = useState<number>(props.value);

    useEffect(()=> {
        setValue(props.value)
    }, [props.value])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let num = +e.currentTarget.value;
        setValue(num);
        props.callback(num);
    }

    let className = `${s.input} ${props.message === 'Incorrect value!'? s.error : ''}`

    return (
            <label className={s.label}>
                {props.title}
                <input type={"number"} className={className} value={value} onChange={onChangeHandler}/>
            </label>

    );
};

export default Input;