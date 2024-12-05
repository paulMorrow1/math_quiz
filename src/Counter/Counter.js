import * as React from "react";

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
const initialStateFunc = () => {
  const c = JSON.parse(localStorage.getItem("count"));
  return {
    count: c || 0,
  };
};

export default function Counter() {
  // React.useState version
  // const [count, setCount] = React.useState(0);
  // const [count, setCount] = React.useState(() => {
  //   const c = JSON.parse(localStorage.getItem("count"));
  //   if (c) return c;
  //   return 0;
  // });

  // React.useEffect(() => {
  //   localStorage.setItem("count", JSON.stringify(count));
  // }, [count]);

  // const increment = () => setCount((prevCount) => prevCount + 1);
  // const decrement = () => setCount((prevCount) => prevCount - 1);

  // React.useReducer version
  const [state, dispatch] = React.useReducer(reducer, initialStateFunc());
  const increment = () => dispatch({ type: COUNTER.INCREMENT });
  const decrement = () => dispatch({ type: COUNTER.DECREMENT });
  const setTo = (c) => dispatch({ type: COUNTER.SETTO, count: c });
  return (
    <div>
      <button onClick={increment}>Increment</button>
      {/* React.useState version */}
      {/* <p>Count: {count}</p> */}

      {/* React.useReducer version */}
      <p>Count: {state.count}</p>
      <button onClick={decrement}>Decrement</button>

      <input
        type="text"
        onChange={({ target }) => setTo(Number(target.value))}
        placeholder="Set count"
      />
    </div>
  );
}
