import { useEffect, useState } from "react";

const GithubUser = ({ username }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const result = await response.json()
            console.log(result)
            setData(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(username)
    }, [username])

    return (
        <>
            {data && <h1>{data.name}</h1>}
        </>
    )
}

export default GithubUser