import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounterByTwo from "./components/IncreaseCounterByTwo";

function App() {
    return (
        <div className="App">
            <Counter/>
            <IncreaseCounter/>
            <DecreaseCounter/>
            <IncreaseCounterByTwo/>
        </div>
    );
}

export default App;
