import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isCartOpen: false,
	notification: null,
};

const uiSlice = createSlice({
	name: "uiCart",
	initialState,
	reducers: {
		toggle(state) {
			state.isCartOpen = !state.isCartOpen;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export default uiSlice;
