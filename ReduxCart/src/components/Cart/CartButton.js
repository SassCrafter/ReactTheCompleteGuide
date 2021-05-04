import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiCartActions } from "../../store/";

const CartButton = (props) => {
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const dispatch = useDispatch();

	const toggleCart = () => {
		dispatch(uiCartActions.toggle());
	};
	return (
		<button className={classes.button} onClick={toggleCart}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalAmount}</span>
		</button>
	);
};

export default CartButton;
