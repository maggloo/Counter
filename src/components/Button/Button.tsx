import React from "react";
import s from './Button.module.css';
type ButtonPropsType = {
    name: string,
    callBack: () => void,
    disabled: boolean
}

function Button(props: ButtonPropsType) {


    return (
        <button onClick={props.callBack} disabled={props.disabled} className={s.button}>{props.name}</button>
    );
}

export default Button;