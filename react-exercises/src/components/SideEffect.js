import { useEffect } from "react"


const SideEffect = (props) => {

    useEffect(() => props.change, [props.count, props.change])

    return (
        <>
            <h1>Counter: {props.count}</h1>
            <button onClick={props.increment}>Increment Counter</button>
        </>
    )
}

export default SideEffect