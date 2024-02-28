import { useState } from "react";

export const useCounter = () => {
	const [counter, setCounter] = useState(10);

	const increaseHandler = (payload) => {
		setCounter((currentVal) => currentVal + payload);
	};

	const decreaseHandler = (payload) => {
		setCounter((currentVal) => currentVal - payload);
	};

	return {
		counter,
		increaseHandler,
		decreaseHandler,
	};
};
