import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

import { counterSliceActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch(counterSliceActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
