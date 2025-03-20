import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/productSlice.js";
import cartReducer from '../redux/cartSlice.js'

const productStore = configureStore({
  reducer: {
    products: productReducer,
    cart : cartReducer
  },
});

export default productStore;
