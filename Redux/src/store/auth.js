import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state) {
			console.log("logging");
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

export default authSlice;
