import React, { useState, useEffect, useRef, Profiler } from 'react';
let cacheFn: any;

function onRenderCallback(
  id: any, // the "id" prop of the Profiler tree that has just committed
  phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration: any, // time spent rendering the committed update
  baseDuration: any, // estimated time to render the entire subtree without memoization
  startTime: any, // when React began rendering this update
  commitTime: any, // when React committed this update
  interactions: any // the Set of interactions belonging to this update
) {
    console.error({id, phase, actualDuration, baseDuration,startTime,commitTime,interactions});
}
function FunctionalComponent() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    // console.error("FunctionalComponent");
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
        // console.error(`run effect in FunctionalComponent when count = ${count}`);
        return () => {
            // console.error(`cleanup effect when count = ${count}`);
        }
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {count == 0 || count == 5 ? null : <Profiler id='ComponentA' onRender={onRenderCallback}><ComponentA /></Profiler>}
            {/* {count == 0 || count == 5 ? null : <ComponentB />} */}
        </div>
    );
}

function ComponentA() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    // console.error(`component A: ${count}`);
    useEffect(() => {
        let ignore = false;
        // console.error('run effect from component A FunctionalComponent');
        setTimeout(()=>{
            // if (!ignore) console.error('not ignore-----------------');
        }, 2000);
        defineOperation();
        return () => {
            ignore = true;
            // console.error('clean effect from component A FunctionalComponent');
        }
    }, [count]);

    const [operationResult, setOperationResult] = useState('');
    const defineOperation = () => {
        const remainder = count % 2;
        switch (remainder) {
            case 0:
                setOperationResult('Count (click) is even number');
                break;
            case 1:
                setOperationResult('Count (click) is odd number');
                break;
        }
    }
    return (
        <div>
            <p>You clicked {count} times. I have been rendered {++renderCount.current} times </p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>{operationResult}</p>
        </div>
    );
}

function ComponentB() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    // console.error(`component B: ${count}`);
    useEffect(() => {
        let ignore = false;
        // console.error('run effect from component B FunctionalComponent');
        setTimeout(()=>{
            // if (!ignore) console.error('not ignore-----------------');
        }, 2000);
        return () => {
            ignore = true;
            // console.error('clean effect from component B FunctionalComponent');
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
