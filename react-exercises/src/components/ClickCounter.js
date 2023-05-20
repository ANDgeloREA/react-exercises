import { useEffect, useState } from "react"
import SideEffect from "./SideEffect"

const ClickCounter = () => {
    const [count, setCount] = useState(0)

    const handleCounterIncrement = () => {
        setCount((_count) => {
            return _count + 1
        })
    }

    const onCounterChange = () => {
        console.log(`The counter is now: ${count}`)
    }

    return (
        <>
            <SideEffect increment={handleCounterIncrement} count={count} change={onCounterChange({count})}/>
        </>
    )

}

export default ClickCounter;