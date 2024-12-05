import * as React from "react";
import { useCounterReducer } from "./useCounter";

export default function Counter() {
  const { count, increment, decrement } = useCounterReducer();
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
