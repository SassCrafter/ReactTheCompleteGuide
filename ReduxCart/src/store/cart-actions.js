import { uiActions, cartActions } from "./index";

export const loadCartData = () => {
	return (dispatch) => {
		fetch("https://react-http-7e725-default-rtdb.firebaseio.com/cart.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to load Cart data");
				}
				return response.json();
			})
			.then((result) => dispatch(cartActions.replaceCart(result)))
			.catch((error) => {
				dispatch(
					uiActions.showNotification({
						status: "error",
						title: "Error occured",
						message: error.message,
					})
				);
			});
	};
};

export const sendCartData = (cartData) => {
	return (dispatch) => {
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
				body: JSON.stringify(cartData),
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Could not send the cart data");
				}
			})
			.then((result) => {
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
	};
};
