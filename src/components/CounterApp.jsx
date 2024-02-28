import { useSelector, useDispatch } from "react-redux";

const CounterApp = () => {
	const counter = useSelector((store) => store.counter);
	// console.log(storeWholeState);
	const dispatch = useDispatch();
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button onClick={() => dispatch({ type: "increment", payload: 1 })}>
				Increase By 1
			</button>
			<button onClick={() => dispatch({ type: "increment", payload: 5 })}>
				Increase By 5
			</button>
			<button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
				Decrease By 1
			</button>
			<button onClick={() => dispatch({ type: "decrement", payload: 3 })}>
				Decrease By 3
			</button>
		</div>
	);
};

export default CounterApp;
