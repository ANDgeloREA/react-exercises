import { useEffect, useState } from "react";

export const useGithubUser = (username) => {
    const [data, setData] = useState([])

    const fetchData = async (username) => {
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


    return {
        data: data
    }
}
