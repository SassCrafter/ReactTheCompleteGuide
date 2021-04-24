import React, { useState } from "react";

// const useInput = (validateValue) => {
// 	const [enteredValue, setEnteredValue] = useState("");
// 	const [enteredValueTouched, setEnteredValueTouched] = useState(false);

// 	const valueIsValid = validateValue(enteredValue);
// 	const hasError = !valueIsValid && enteredValueTouched;

// 	const valueChangeHandler = (e) => {
// 		setEnteredValue(e.target.value);
// 	};

// 	const inputBlurHandler = (e) => {
// 		setEnteredValueTouched(true);
// 	};

// 	const reset = () => {
// 		setEnteredValue("");
// 		setEnteredValueTouched(false);
// 	};

// 	return {
// 		value: enteredValue,
// 		isValid: valueIsValid,
// 		hasError,
// 		valueChangeHandler,
// 		inputBlurHandler,
// 		reset,
// 	};
// };

const useInput = (valueValidation) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [enteredValueTouched, setEnteredValueTouched] = useState(false);

	const valueIsValid = valueValidation(enteredValue);
	const valueHasError = !valueIsValid && enteredValueTouched;

	const valueChangeHandler = (e) => {
		setEnteredValue(e.target.value);
	};

	const inputBlurHandler = () => {
		setEnteredValueTouched(true);
	};

	const reset = () => {
		setEnteredValue("");
		setEnteredValueTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError: valueHasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
