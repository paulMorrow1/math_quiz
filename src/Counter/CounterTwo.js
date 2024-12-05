import * as React from "react";
import { useIsNewContext } from "./NewContext";
import { useCounterState } from "./useCounter";

export default function Counter() {
  const { count, increment, decrement } = useCounterState();
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
