import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserList = () => {
    const [name, setName] = useState([]);
    const [item, setItem] = useState([]);

    const handleSetList = () => {
        setItem([...item, name]);
    }

    return (
        <>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
            <button onClick={handleSetList}>Add User</button>
            {item.map((name, index) => {
                return (
                    <GithubUser key={index} username={name} />
                )
                })
            }
        </>
    )
}

export default GithubUserList;