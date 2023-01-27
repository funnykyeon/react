import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return { count: state.count + 1 };
  }

  return state;
};

// dispatch => action 객체를 넣어서 실행

// action 객체는 필수로 type 필드를 가지고 있어야 한다.

export default function Example6() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    dispatch({ type: "PLUS" });
  }
}
