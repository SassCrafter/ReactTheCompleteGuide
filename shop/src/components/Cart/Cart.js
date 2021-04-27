import React, { useState, useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";

function Cart({ onHideCart }) {
	const [showCheckout, setShowCheckout] = useState(false);
	const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
	const totalPrice = `$${totalAmount.toFixed(2)}`;

	const cartItemAddHandler = (item) => {
		addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		removeItem(id);
	};

	const openCheckoutHandler = () => {
		setShowCheckout(true);
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onBackdropClick={onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalPrice}</span>
			</div>
			{showCheckout && <Checkout cancelHandler={onHideCart} />}
			{!showCheckout && (
				<div className={classes.actions}>
					<button
						className={classes["button-alt"]}
						onClick={onHideCart}
					>
						Close
					</button>
					{items.length > 0 && (
						<button
							className={classes.button}
							onClick={openCheckoutHandler}
						>
							Order
						</button>
					)}
				</div>
			)}
		</Modal>
	);
}

export default Cart;
