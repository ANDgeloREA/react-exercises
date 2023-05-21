import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("I have mounted")
        return () => {
            console.log("I am about to be unmounted")
        }
    }, [])

    useEffect(() =>{
        let interval = setInterval(() => {
            setCount(() => {
                return count + 1
            })
        }, 1000);

        return () => {
          clearInterval(interval, 1000)
        }
    }, [count])

    return (
        <>
            <h1>Counter: {count}</h1>
        </>
    )
}

export default Counter;