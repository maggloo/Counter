import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import s from "./components/ShowSettings/ShowSettings.module.css";

export let STEP = 1;

function App() {

    const startInputValFromLS = localStorage.getItem('startValue');
    const maxInputValFromLS = localStorage.getItem('maxValue');

    const [maxInputValue, setMaxInputValue] = useState<number>(maxInputValFromLS ? +maxInputValFromLS : 5);
    const [startInputValue, setStartInputValue] = useState<number>(startInputValFromLS ? +startInputValFromLS : 0);
    const [counter, setCounter] = useState<number>(startInputValue);
    const [message, setMessage] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxInputValue));
        localStorage.setItem('startValue', JSON.stringify(startInputValue));
        setCounter(startInputValue);
        btnDisabling();
    }, [maxInputValue, startInputValue]);


    const saveValue = () => {
        setMessage('');
        setDisabled(true)
    }

    const btnDisabling = () => {
        if (maxInputValue <= startInputValue
            || maxInputValue < 0
            || startInputValue < 0
        ) {
            setMessage('Incorrect value!');
            setDisabled(true);
        } else {
            setMessage('enter values and press \'set\'');
            setDisabled(false);
        }
    }

    const setMaxValue = (value: number) => {
        setMaxInputValue(value);
    }

    const setStartValue = (value: number) => {
        setStartInputValue(value);
    }

    const onChangeHandler = (value: number, name: string) => {
        name === 'max' ? setMaxValue(value) : setStartValue(value)
    }

    const incrementCounter = () => {
        if (counter < (maxInputValFromLS ? +maxInputValFromLS : 5)
            && counter >= (startInputValFromLS ? +startInputValFromLS : 0)) {
            setCounter(counter + STEP)
        }
    }

    const resetCounter = () => {
        setCounter(startInputValFromLS ? +startInputValFromLS : 0);
    }


    return (
        <div className="App">

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
                            disabled={disabled}
                    />
                </div>
            </div>
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
        </div>
    );
}

export default App;
