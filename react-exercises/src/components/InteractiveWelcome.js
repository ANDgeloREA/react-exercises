import React from "react"
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
    state = {
        username: "",
    }

    handleUsernameInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <>
                <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameInputChange}/>
                <Welcome name={this.state.username} />
            </>
        )
    }
}

export default InteractiveWelcome;