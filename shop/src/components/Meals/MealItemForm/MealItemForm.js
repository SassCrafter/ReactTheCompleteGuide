import React, { useState, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

function MealItemForm({ onAddToCart, inputId }) {
	const [amountIsValid, setAmountIsValid] = useState(true);

	const mealAmountRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredAmount = mealAmountRef.current.value;
		const enteredAmountNum = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNum < 1 ||
			enteredAmountNum > 5
		) {
			setAmountIsValid(false);
			return;
		}

		setAmountIsValid(true);
		onAddToCart(enteredAmountNum);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={mealAmountRef}
				label="Amount"
				input={{
					id: { inputId },
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>Add</button>
			{!amountIsValid && <h4>Please enter a valid amount (1-5)</h4>}
		</form>
	);
}

export default MealItemForm;
