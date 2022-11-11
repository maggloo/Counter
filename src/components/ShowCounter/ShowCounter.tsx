import React, {useEffect, useState} from 'react';
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import {STEP} from "../../App";

type ShowCounterPropsType = {
    callback: () => void,
    maxInputValue: number
    startInputValue: number
    message: string
    disabled: boolean
}

const ShowCounter = (props: ShowCounterPropsType) => {


    const [counter, setCounter] = useState<number>(props.startInputValue);

    useEffect(() => {
        setCounter(props.startInputValue);
    }, [props.startInputValue])


    const incrementCounter = () => {
        if (counter < props.maxInputValue && counter >= props.startInputValue) {
            setCounter(counter + STEP)
        }
    }

    const resetCounter = () => {
        setCounter(props.startInputValue);
    }

    return (
        <div className="wrapper">

            <Counter counter={props.message ? props.message : counter} maxVal={props.maxInputValue}/>
            <div className='buttons-wrapper'>
                <Button name={'inc'}
                        callBack={incrementCounter}
                        disabled={(counter === props.maxInputValue
                                ? true
                                : !!props.message
                        )}
                />
                <Button name={'reset'}
                        callBack={resetCounter}
                        disabled={(counter === props.startInputValue
                                ? true
                                : !!props.message
                        )}
                />
                {/* <Button name={'set'}
                        callBack={props.callback}
                        disabled={false}
                />
*/}
            </div>
        </div>
    );
};

export default ShowCounter;