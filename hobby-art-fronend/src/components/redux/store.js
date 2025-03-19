import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/productSlice.js";

const productStore = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default productStore;
