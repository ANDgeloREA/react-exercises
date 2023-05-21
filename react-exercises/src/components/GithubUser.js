import { useGithubUser } from "../hooks/useGithubUser"

const GithubUser = ({ username }) => {
    const { data, loading, error } = useGithubUser(username)

    return (
        <>
            {data && (
                <div>
                    {loading && <h1>Loading</h1>}
                    {error && <h1>Error</h1>}
                    <h1>{data.name}</h1>
                </div>
            )}
        </>
    )
}

export default GithubUser
