import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart";
import uiCartSlice from "./uiCart";

const store = configureStore({
	reducer: { cart: cartSlice.reducer, uiCart: uiCartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const uiCartActions = uiCartSlice.actions;
export default store;
