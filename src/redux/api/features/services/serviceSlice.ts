import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

const initialState: { cart: CartItem[]; total: number } = {
  cart: [],
  total: 0,
};

export const serviceSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.cart.find((item) => item._id === itemToAdd._id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.total += itemToAdd.price;
      } else {
        state.cart.push({ ...itemToAdd, quantity: 1 });
        state.total += itemToAdd.price;
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemIndex = state.cart.findIndex((item) => item._id === itemIdToRemove);

      if (itemIndex !== -1) {
        const removedItem = state.cart.splice(itemIndex, 1)[0];
        state.total -= removedItem.price * removedItem.quantity;
      }
    },
    incrementQuantity: (state, action) => {
        const itemIdToIncrement = action.payload;
        const existingItem = state.cart.find((item) => item._id === itemIdToIncrement);
  
        if (existingItem) {
          existingItem.quantity += 1;
          state.total += existingItem.price; 
        }
      },
    decreaseQuantity: (state, action) => {
      const itemIdToDecrease = action.payload;
      const existingItem = state.cart.find((item) => item._id === itemIdToDecrease);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.total -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
       
        const itemIndex = state.cart.findIndex((item) => item._id === itemIdToDecrease);
        if (itemIndex !== -1) {
          const removedItem = state.cart.splice(itemIndex, 1)[0];
          state.total -= removedItem.price;
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart,incrementQuantity } = serviceSlice.actions;

export default serviceSlice.reducer;
