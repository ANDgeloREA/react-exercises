import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
                    <p key={index}><Link to={name}>{name}</Link></p>
                )
                })
            }
            <Outlet/>
        </>
    )
}

export default GithubUserList;