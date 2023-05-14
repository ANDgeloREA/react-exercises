import React from "react"
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    };

    constructor(props) {
        super(props)

        this.state = {
            count: props.initialValue
        };

            this.interval = null;
        };
    
        componentDidMount() {
            this.interval = setInterval(() => {
                this.setState(state => ({
                  count: state.count + this.props.increment
            }));
        }, this.props.incrementInterval);
    };

    render() {
        return (
            <>
                <CounterDisplay count={this.state.count}/>
            </>
        )
    };
};

Counter.defaultProps = {
    initialValue: 0,
    incrementInterval: 1000,
    increment: 1,
};

export default Counter;
