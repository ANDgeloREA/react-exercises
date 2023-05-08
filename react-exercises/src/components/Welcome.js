import React from "react"

class Welcome extends React.Component {
    super(props) {} 
    render() {
        return <p>Welcome, {this.props.name || "tell me your name"}!</p>
    }
}

export default Welcome;
