import * as React from "react";
import { useCounterContext } from "./CounterContext";
import { useIsNewContext } from "./NewContext";

export default function Counter() {
  const { count, increment, decrement } = useCounterContext();
  const { isNew, setIsNew } = useIsNewContext();
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button disabled={!isNew} onClick={() => setIsNew(false)}>
        Is new: {JSON.stringify(isNew)}
      </button>
    </div>
  );
}
