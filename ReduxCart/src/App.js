import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/";

let isInitial = true;

function App() {
	const cart = useSelector((state) => state.cart);
	const notificationData = useSelector((state) => state.ui.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		dispatch(
			uiActions.showNotification({
				status: "loading",
				title: "Sending ...",
				message: "Sending Cart data",
			})
		);
		fetch(
			"https://react-http-7e725-default-rtdb.firebaseio.com/cart.json",
			{
				method: "PUT",
				body: JSON.stringify(cart),
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Could not send the cart data");
				}
			})
			.then((result) => {
				console.log(result);
				dispatch(
					uiActions.showNotification({
						status: "success",
						title: "Success",
						message: "Cart data has been sent successfully",
					})
				);
			})
			.catch((error) => {
				dispatch(
					uiActions.showNotification({
						status: "error",
						title: "Error occured",
						message: error.message,
					})
				);
			});
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
