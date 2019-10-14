import React from 'react';

class ClassComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
        console.error('mount ClassComponent -> running constructor');
    }

    onClickHandler = () => {
        console.error('onClickHandler as a class field');
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        console.error('this.componentDidMount()');

    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
        console.error('this.componentDidUpdate()');
    }

    componentWillUnmount(): void {
        console.error('this.componentWillUnmount()');
    }

    render() {
        console.error('render ClassComponent');
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
                {this.state.count == 0 || this.state.count == 5 ? null : <ComponentA onClick={this.onClickHandler} />}
            </div>
        );
    }
}

class ComponentA extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
        console.error('mount Component A -> running constructor');
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        console.error('this.componentDidMount()');

    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
        console.error('this.componentDidUpdate()');
    }

    componentWillUnmount(): void {
        console.error('this.componentWillUnmount()');
    }
    render() {
        console.error('render Component A');
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}

export default ClassComponent;
