import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

function MealItemForm({ label, input }) {
	return (
		<form className={classes.form}>
			<Input label={label} input={input} />
			<button>Add</button>
		</form>
	);
}

export default MealItemForm;
