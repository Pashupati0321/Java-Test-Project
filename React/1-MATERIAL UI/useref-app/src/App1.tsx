import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App1() {
    const inputElement = useRef<HTMLInputElement>(null);

    const onBtnClicked = () => {
        console.log(inputElement.current);
        if (inputElement.current) {
            console.log("Input value:", inputElement.current.value);
        }
    };

    return (
        <div className='App'>
            <input type='text' ref={inputElement} />
            <button onClick={onBtnClicked}>Click here</button>
        </div>
    );
}

export default App1;
