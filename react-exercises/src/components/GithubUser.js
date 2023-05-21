import { useGithubUser } from "../hooks/useGithubUser"

const GithubUser = ({ username }) => {
    const { data } = useGithubUser(username)

    return (
        <>
            {data && <h1>{data.name}</h1>}
        </>
    )
}

export default GithubUser
