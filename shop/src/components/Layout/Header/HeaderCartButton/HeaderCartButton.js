import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../../Cart/CartIcon";
import CartContext from "../../../../store/cart-context";

function HeaderCartButton({ onClick }) {
	const { items: cartItems } = useContext(CartContext);
	const numberOfCartItems = cartItems.reduce((total, item) => {
		return total + item.amount;
	}, 0);
	console.log(numberOfCartItems);
	return (
		<button className={styles.button} onClick={onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems || 0}</span>
		</button>
	);
}

export default HeaderCartButton;
