import React, { Component } from 'react';

class Timer extends Component {
    state = { elapsed: 0 };
    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick = () => {
        this.setState(prevState => ({ elapsed: prevState.elapsed + 1 }));
    };
    
    render() {
        return (
            <span>{this.state.elapsed}</span>
        );
    }
}

export default Timer;
