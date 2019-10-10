import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Example />
        </div>
    );
};
let cacheFn: any;

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    console.error("aaaaaaa");
    const fn = function () {
        console.error("this is fn");
    };
    if (!cacheFn) {
        cacheFn = fn;
    }
    console.error(fn === cacheFn);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {count == 0 || count == 5 ? null : <ComponentA />}
        </div>
    );
}

function ComponentA() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    console.error(`component A: ${count}`);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default App;
