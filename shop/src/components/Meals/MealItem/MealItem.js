import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";

function MealItem({ name, description, price }) {
	const formattedPrice = `$${price.toFixed(2)}`;
	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<p className={classes.description}>{description}</p>
				<h2 className={classes.price}>{formattedPrice}</h2>
			</div>
			<div>
				<MealItemForm
					label="Amount"
					input={{
						id: name + price,
						type: "number",
						min: "1",
						max: "5",
						step: "1",
						defaultValue: "1",
					}}
				/>
			</div>
		</li>
	);
}

export default MealItem;
