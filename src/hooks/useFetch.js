import { useState, useEffect } from "react";

export const useFetch = (initData, url) => {
	const [data, setData] = useState(initData);
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				setLoading(false);
				setErrorMessage("");
			})
			.catch((err) => {
				setErrorMessage(err.message);
				setLoading(false);
				setData(initData);
			});
	}, []);

	return {
		data,
		loading,
		errorMessage,
	};
};
