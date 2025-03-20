import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cart.push(item);
      state.totalItems++;
      state.totalPrice += item.price;
      toast.success(`${item.name} added to the cart`);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const index = state.cart.findIndex((item)=> item.id === itemId);

      if(index >= 0){
        const removedItem = state.cart[index];
        state.totalItems--;
        state.totalPrice -=state.cart[index].price;
        state.cart.splice(index,1);
        toast.success(`${removedItem.name} succesfully removed`)
      }
    },
    resetCart :(state)=>{
        state.cart=[]
        state.totalPrice = 0;
        state.totalItems=0;
    }
  },
});
export default cartSlice.reducer;
export const {addToCart,removeFromCart} = cartSlice.actions
