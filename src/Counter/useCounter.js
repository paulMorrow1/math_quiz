import * as React from "react";

export function useCounterState() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  return {
    count,
    setCount,
    increment,
    decrement,
  };
}

export function useCounterReducer() {
  const COUNTER = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    SETTO: "setto",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case COUNTER.INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
      case COUNTER.DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      case COUNTER.SETTO:
        return {
          ...state,
          count: action.count,
        };
      default:
        return state;
    }
  };
  const initialState = { count: 0 };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const increment = () => dispatch({ type: COUNTER.INCREMENT });
  const decrement = () => dispatch({ type: COUNTER.DECREMENT });
  return {
    count: state.count,
    increment,
    decrement,
  };
}
