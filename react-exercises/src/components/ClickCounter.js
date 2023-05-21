import { useCounter } from "../hooks/useCounter"

const ClickCounter = ({initialValue = 0}) => {
    const {count, increment, decrement, reset} = useCounter(initialValue)
     
    return (
        <>
          <h1>Counter: {count}</h1>
          <div>
            <button onClick={increment}>Increment by 1</button>
            <button onClick={decrement}>Decrement by 1</button>
            <button onClick={reset}>Restart by 0</button>
          </div>
        </>
    );
}

export default ClickCounter