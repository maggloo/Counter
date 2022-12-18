import React from 'react';
import './App.css';
import Settings from "./components/ShowSettings/Settings";
import CounterScreen from "./components/ShowCounter/CounterScreen";


function App() {

    return (
        <div className="App">

            <Settings/>
            <CounterScreen />

        </div>
    );
}

export default App;
