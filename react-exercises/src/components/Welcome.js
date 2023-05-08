import React from "react"

class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, <strong>{this.props.name}</strong>!</p>
                <p>Your age is {this.props.age}!</p>
            </>
        )
    }
}

Welcome.defaultProps = {
    name: "Andrea",
    age: "29"
  }

export default Welcome;
