import React from "react";
import classes from "./Input.module.css";

function Input({
	type = "text",
	labelText,
	id,
	isValid,
	value,
	changeHandler,
	blurHandler,
}) {
	return (
		<div
			className={`${classes.control} ${
				isValid === false ? classes.invalid : ""
			}`}
		>
			<label htmlFor={id}>{labelText}</label>
			<input
				type={type}
				id={id}
				value={value}
				onChange={changeHandler}
				onBlur={blurHandler}
			/>
		</div>
	);
}

export default Input;
