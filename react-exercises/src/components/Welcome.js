import React from "react"
import Age from "./Age";

class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, <strong>{this.props.name}</strong>!</p>
                {this.props.age >= 18 && <Age age={this.props.age} />}
            </>
        )
    }
}

Welcome.defaultProps = {
    name: "Andrea",
}

export default Welcome;
