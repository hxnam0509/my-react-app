import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import './App.css';
import ClassComponent from "./ClassComponent";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>FunctionalComponent</h1>
            <FunctionalComponent />
            <h1>Class Component</h1>
            <ClassComponent />
        </div>
    );
};

export default App;
