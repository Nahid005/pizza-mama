import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCartItem(state, action) {
            state.carts.push(action.payload)
        },
        updateCartItem(state, action) {
            const item = state.carts.find(cart => cart.pizzaId === action.payload);
        },
        deleteCartItem(state, action) {
            const remainingItems = state.carts.filter(item => item.pizzaId !== action.payload);
            state.carts = remainingItems;
        },
        increaseItemQuantity(state, action) {
            const item = state.carts.find((item) => item.pizzaId === action.payload);
            console.log(item)
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            const item = state.carts.find((item) => item.pizzaId === action.payload);
            
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if(item.quantity === 0) cartSlice.caseReducers.deleteCartItem(state, action);
        },
        clearCartItem(state) {
            state.carts = []
        },
    }
})

export const {addCartItem, updateCartItem, deleteCartItem, clearCartItem, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;

export function getCartsItems(state) {
    return state.cart?.carts;
}

export function getTotalCartQty(state) {
    return state.cart?.carts?.reduce((acc, curr) => acc + curr.quantity, 0) || 0;
}

export function getTotalCartPrice(state) {
    return state.cart?.carts?.reduce((acc, curr) => acc + curr.totalPrice, 0) || 0;
}

export const getCurrentQtyById = (id) => (state) => {
    return state.cart.carts.find(item => item.pizzaId === id)?.quantity ?? 0;
} 
