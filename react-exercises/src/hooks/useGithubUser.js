import { useEffect, useState } from "react";

export const useGithubUser = (username) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async (username) => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const result = await response.json()

            if(response.status !== 200){setError(new Error())}

            console.log(result)
            setData(result)
        } catch (err) {
            setError(err)
            setData([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(username)
    }, [username])


    return {
        data: data,
        loading: loading,
        error: error
    }
}
