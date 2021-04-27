import { useState, useEffect } from "react";

const useHttp = (config, cb) => {
	const { url, method, headers, body } = config;
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = () => {
		setIsLoading(true);
		setError(null);
		return fetch(url, {
			method: method || "GET",
			headers: headers || {},
			body: JSON.stringify(body) || null,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Request failed");
				}
				const data = response.json();
				return data;
			})
			.then((result) => {
				console.log(result);
				setIsLoading(false);
				cb(result);
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error.message || "Something went wrong");
				console.log(error.message);
			});
	};

	return {
		isLoading,
		error,
		sendRequest,
	};
};

export default useHttp;
