import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, loadCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
	const cart = useSelector((state) => state.cart);
	const notificationData = useSelector((state) => state.ui.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadCartData());
	}, []);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		dispatch(sendCartData(cart));
	}, [cart]);

	return (
		<Layout>
			{notificationData && (
				<Notification
					status={notificationData.status}
					title={notificationData.title}
					message={notificationData.message}
				/>
			)}
			<Cart />
			<Products />
		</Layout>
	);
}

export default App;
