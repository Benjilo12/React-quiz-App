import { useReducer } from "react";
const initialState = { count: 0, step: 1 };

//?step 2
//!we use switch to increse and decrease the count state
//! we den set the setCount onto the onChange E...
//! we then set the reset button
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };

    default:
      throw new Error("Unknown action");
  }
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount") return action.payload;
}

export default function DateCounter() {
  // const [count, setCount] = useState(0)
  // const [step, setStep] = useState(1);

  //?step 1
  //! we set the intialstate which is the state
  //! then we passs inthe initialstate into the  reducer state
  //!then we destructure

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  //so the date plus count
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  //it decreases
  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  //it increases
  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    //   setCount((count) => count + step);
  };

  //!onChange for the setCount which is the input text
  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: +e.target.value });
    // setCount(Number(e.target.value));
  };

  //!onChange for the setStep which is the range
  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: +e.target.value });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({
      type: "reset",
    });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
