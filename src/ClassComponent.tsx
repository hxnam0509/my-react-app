import React, { useState, useEffect } from 'react';

class ClassComponent extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            count: 0
        };
        console.error('mount ClassComponent -> running constructor');
    }

    render() {
        console.error('render ClassComponent');
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
                {this.state.count == 0 || this.state.count == 5 ? null : <ComponentA />}
            </div>
        );
    }
}

class ComponentA extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            count: 0
        };
        console.error('mount Component A -> running constructor');
    }

    render() {
        console.error('render Component A');
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
                {this.state.count == 0 || this.state.count == 5 ? null : <ComponentA />}
            </div>
        );
    }
}

export default ClassComponent;
