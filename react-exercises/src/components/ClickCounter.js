import React from "react"
import CounterDisplay from "./CounterDisplay";

class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    handleCounterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.increment
            }
        })
    }

    render() {
        return (
            <>
                <CounterDisplay count={this.state.count}/>
                <button onClick={this.handleCounterIncrement}>Increment Counter</button>
            </>
        )
    }
}

ClickCounter.defaultProps = {
    initialValue: 0,
    increment: 1,
}

export default ClickCounter;
