import * as React from "react";
import { useCounterState } from "./useCounter";

const CounterContext = React.createContext(null);

export const CounterProvider = ({ children }) => {
  const { count, setCount, increment, decrement } = useCounterState();
  const setTo = (num) => setCount(Number(num));
  return (
    <CounterContext.Provider value={{ count, increment, decrement, setTo }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error("You need to use this context inside of 'CounterProvider'");
  }
  return context;
};
