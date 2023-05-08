import React from "react"

class Welcome extends React.Component {
    super(props) {} 
    render() {
        return <p>Welcome, {this.props.name}! Your age is {this.props.age}!</p>
    }
}

export default Welcome;
