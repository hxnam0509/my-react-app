import React, { useState, useEffect } from 'react';
let cacheFn: any;

function FunctionalComponent() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    console.error("FunctionalComponent");
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
    useEffect(() => {
        console.error('effect from component A FunctionalComponent');
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default FunctionalComponent;
