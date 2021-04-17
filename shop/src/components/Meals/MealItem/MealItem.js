import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem({ id, name, description, price }) {
	const { addItem } = useContext(CartContext);

	const formattedPrice = `$${price.toFixed(2)}`;

	const addItemToCartHandler = (amount) => {
		addItem({
			id: Math.random(),
			name,
			amount,
			price,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<p className={classes.description}>{description}</p>
				<h2 className={classes.price}>{formattedPrice}</h2>
			</div>
			<div>
				<MealItemForm
					onAddToCart={addItemToCartHandler}
					inputId={name + price}
				/>
			</div>
		</li>
	);
}

export default MealItem;
