import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (p) => p.id === product.id
      );

      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        existingProduct.quantity += 1;
      } else {
        // If the product is new, add it to the cart
        state.products.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      state.quantity += 1;
      state.total += product.price;
    },

    removeProduct: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (p) => p.id === productId
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          // If the quantity becomes zero, remove the product from the cart
          state.products = state.products.filter(
            (p) => p.id !== productId
          );
        } else {
          // If the quantity is more than one, decrement the quantity
          existingProduct.quantity -= 1;
        }

        state.quantity -= 1;
        state.total -= existingProduct.price;
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
