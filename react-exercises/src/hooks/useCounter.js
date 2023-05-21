import { useState } from "react"

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  function handleCounterIncrement() {
    setCount(count => count + 1);
  };

  function handleCounterDecrement() {
    setCount(count => count - 1);
  };

  function handleCounterReset() {
    setCount(initialValue);
  };

  return {
    count: count,
    increment: handleCounterIncrement,
    decrement: handleCounterDecrement,
    reset: handleCounterReset,
  }
}
