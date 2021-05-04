import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

const uiCartSlice = createSlice({
	name: "uiCart",
	initialState,
	reducers: {
		toggle(state) {
			state.isOpen = !state.isOpen;
		},
	},
});

export default uiCartSlice;
