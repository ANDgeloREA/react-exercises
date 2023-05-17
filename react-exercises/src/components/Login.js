import React from "react"

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === "checkbox" ? checked : value,
        })
    }

    onLogin = (event) => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
    }

    handleResetState = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.onLogin}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInputChange} />
                    <button type="submit" disabled={!this.state.username || !this.state.password}>Login</button>
                    <button type="submit" onClick={this.handleResetState}>Reset</button>
                </form>
            </>
        )
    }
}

export default Login;