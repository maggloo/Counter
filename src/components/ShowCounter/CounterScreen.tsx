import React, {useEffect} from 'react';
import Button from "../Button/Button";
import {setCounterValueAC, setMessageAC} from "../../redux/reducers/counter_reducer";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../redux/store";
import {
    toggleSetButtonSetAC
} from "../../redux/reducers/settings_reducer";
import Counter from "../Counter/Counter";

const CounterScreen = () => {

    let maxInputValue = useSelector<AppRootStateType, number>(state => state.settings.maxInputValue);
    let startInputValue = useSelector<AppRootStateType, number>(state => state.settings.startInputValue);


    const message = useSelector<AppRootStateType, string>(state => state.counter.message);
    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter);

    const dispatch = AppDispatch();

    useEffect(() => {
        btnDisabling();
    }, [maxInputValue, startInputValue]);

    const btnDisabling = () => {
        if (maxInputValue <= startInputValue
            || maxInputValue < 0
            || startInputValue < 0
        ) {
            dispatch(setMessageAC('Incorrect value!'));
            dispatch(toggleSetButtonSetAC(true))
        } else {
            dispatch(setMessageAC('enter values and press \'set\''));
            dispatch(toggleSetButtonSetAC(false));
        }
    }

    const incrementCounter = () => {
        if (counter < maxInputValue
            && counter >= 0) {
            dispatch(setCounterValueAC(counter + 1));
        }
    }

    const resetCounter = () => {
        dispatch(setCounterValueAC(startInputValue));
    }


    return (
        <div className='wrapperRight'>
            <Counter counter={message ? message : counter} maxVal={maxInputValue}/>
            <div className='buttons-wrapper'>
                <Button name={'inc'}
                        callBack={incrementCounter}
                        disabled={(!!message) || counter === maxInputValue}
                />
                <Button name={'reset'}
                        callBack={resetCounter}
                        disabled={(!!message)}
                />
            </div>
        </div>
    );
};

export default CounterScreen;