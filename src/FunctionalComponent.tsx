import React, { useState, useEffect } from 'react';
let cacheFn: any;

function FunctionalComponent() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    console.error("FunctionalComponent");
    // const fn = function () {
    //     console.error("this is fn");
    // };
    // if (!cacheFn) {
    //     cacheFn = fn;
    // }
    // console.error(fn === cacheFn);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        console.error('run effect');
        return () => {
            console.error('cleanup effect');
        }
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
        let ignore = false;
        console.error('run effect from component A FunctionalComponent');
        setTimeout(()=>{
            if (!ignore) console.error('not ignore-----------------');
        }, 2000);
        return () => {
            ignore = true;
            console.error('clean effect from component A FuncComp');
        }
    }, []);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default FunctionalComponent;
