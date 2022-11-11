import React from "react";
import s from './Counter.module.css';

type CounterPropsType = {
    counter: number | string;
    maxVal: number
}

function Counter(props: CounterPropsType) {

    let className = `${s.counter} ${(props.counter === props.maxVal || props.counter === 'Incorrect value!') ? s.red : ''}`;

    return (
        <div className={className}>{props.counter}</div>
    );
}

export default Counter;