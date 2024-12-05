import * as React from "react";
import { useCounterContext } from "./CounterContext";

export default function Counter() {
  const { count, increment, decrement, setTo } = useCounterContext();
  const countRef = React.useRef();
  console.log(countRef.current?.getBoundingClientRect());
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <input type="text" ref={countRef} placeholder="Set count to" />
      <button onClick={() => setTo(countRef.current.value)}>Set Count</button>
    </div>
  );
}
