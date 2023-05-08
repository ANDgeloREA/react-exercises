import React from "react"
import Age from "./Age";

class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, <strong>{this.props.name}</strong>!</p>
                <Age />
            </>
        )
    }
}

Welcome.defaultProps = {
    name: "Andrea",
}

export default Welcome;
