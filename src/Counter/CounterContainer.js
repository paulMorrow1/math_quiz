import Counter from "./Counter";
import { CounterProvider } from "./CounterContext";
import CounterFive from "./CounterFive";
import CounterFour from "./CounterFour";
import CounterThree from "./CounterThree";
import CounterTwo from "./CounterTwo";
import { IsNewContextProvider } from "./NewContext";

export default function CounterContainer() {
  return (
    <div>
      <h3>Counter</h3>
      <Counter />
      <hr />
      <h3>Counter Two</h3>
      <IsNewContextProvider>
        <CounterTwo />
      </IsNewContextProvider>
      <hr />
      <h3>Counter Three</h3>
      <CounterThree />
      <hr />
      <h2>Counter Provider</h2>
      <CounterProvider>
        <IsNewContextProvider>
          <h3>Counter Four</h3>
          <CounterFour />
        </IsNewContextProvider>
        {"---------------------------------------------------------------"}
        <h3>Counter Five</h3>
        <CounterFive />
      </CounterProvider>
    </div>
  );
}
