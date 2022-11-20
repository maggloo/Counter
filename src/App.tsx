import React from 'react';
import './App.css';
import Settings from "./components/ShowSettings/Settings";
import CounterScreen from "./components/ShowCounter/CounterScreen";


function App() {

   /* const startInputValFromLS = localStorage.getItem('startValue');
    const maxInputValFromLS = localStorage.getItem('maxValue');*/

    /*const settings = useSelector<AppRootStateType, settingsReducerInitialType>(state => state.settings)
    const counterObj = useSelector<AppRootStateType, counterReducerInitialStateType>(state => state.counter)
    const dispatch = useDispatch();*/
/*

    useEffect(() => {
        /!*localStorage.setItem('maxValue', JSON.stringify(maxInputValue));
        localStorage.setItem('startValue', JSON.stringify(startInputValue));*!/
        dispatch(setCounterValueAC(settings.startInputValue));
        btnDisabling();
    }, [settings.maxInputValue, settings.startInputValue]);

*/




    return (
        <div className="App">

            <Settings/>
            <CounterScreen />

        </div>
    );
}

export default App;
