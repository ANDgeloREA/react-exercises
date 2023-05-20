import { useState } from "react"

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    })

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const onLogin = (event) => {
        event.preventDefault();
        let user = {
            username: data.username,
            password: data.password,
            remember: data.remember
        }
        console.log(user);
    }

    const handleResetState = () => {
        setData({
            username: "",
            password: "",
            remember: false,
        })
    }


    return (
        <>
            <form onSubmit={onLogin}>
                <input type="text" name="username" value={data.username} onChange={handleInputChange} />
                <input type="password" name="password" value={data.password} onChange={handleInputChange} />
                <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} />
                <button type="submit" disabled={!data.username || !data.password}>Login</button>
                <button type="submit" onClick={handleResetState}>Reset</button>
            </form>
        </>
    )

}

export default Login;