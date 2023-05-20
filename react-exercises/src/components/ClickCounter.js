import { useState } from "react"

const ClickCounter = () => {
    const [count, setCount] = useState(0)

    const handleCounterIncrement = () => {
        setCount((_count) => {
            return _count + 1
        })
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={handleCounterIncrement}>Increment Counter</button>
        </>
    )

}

export default ClickCounter;