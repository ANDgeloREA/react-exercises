import { useCallback, useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = useCallback(
        function handleCounterIncrement() {
            setCount(count => count + 1);
        }, [])

    const handleDecrement = useCallback(
        function handleCounterDecrement() {
            setCount(count => count - 1);
        }, [])

    const handleReset = useCallback(
        function handleCounterReset() {
            setCount(initialValue);
        }, [])

    return {
        count: count,
        increment: handleIncrement,
        decrement: handleDecrement,
        reset: handleReset,
    }
}