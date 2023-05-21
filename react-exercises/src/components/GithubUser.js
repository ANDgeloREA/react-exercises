import { useGithubUser } from "../hooks/useGithubUser"

const GithubUser = ({ username }) => {
    const { data, error } = useGithubUser(username)

    return (
        <>
            {error && <h1>Error</h1>}
            {data && <h1>{data.name}</h1>}
        </>
    )
}

export default GithubUser