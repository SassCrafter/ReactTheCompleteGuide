import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalAmount: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			const itemIndex = state.items.findIndex(
				(el) => el.id === action.payload.id
			);
			console.log(
				`actionId=${action.payload.id}, itemIndex=${itemIndex}`
			);
			if (itemIndex === -1) {
				state.items.push({
					id: action.payload.id,
					name: action.payload.name,
					price: action.payload.price,
					amount: 1,
					totalPrice: +action.payload.price,
				});
			} else {
				const item = state.items[itemIndex];
				state.items[itemIndex] = {
					...item,
					amount: item.amount + 1,
					totalPrice: item.totalPrice + item.price,
				};
			}
			state.totalAmount++;
			state.totalPrice += action.payload.price;
		},
		removeItem(state, action) {
			const itemIndex = state.items.findIndex(
				(el) => el.id === action.payload
			);
			const item = state.items[itemIndex];
			if (item.amount === 1) {
				state.items.splice(itemIndex, 1);
			} else {
				state.items[itemIndex] = {
					...item,
					amount: item.amount - 1,
					totalPrice: item.totalPrice - item.price,
				};
			}
			state.totalAmount--;
			state.totalPrice -= action.payload.price;
		},
	},
});

export default cartSlice;
