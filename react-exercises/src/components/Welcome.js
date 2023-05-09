import React from "react"
import Age from "./Age";

class Welcome extends React.Component {
    render() {
        return (
            <>
                {this.props.name === "John" && <p>Welcome, <strong>{this.props.name}</strong>!</p>}
                {this.props.age >= 18 && this.props.age <= 65 && <Age age={this.props.age} />}
            </>
        )
    }
}

Welcome.defaultProps = {
    name: "Andrea",
    age: 29
  }

export default Welcome;
