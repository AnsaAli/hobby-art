import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async()=>{
      const response = await fetch("https://raw.githubusercontent.com/AnsaAli/art-data/refs/heads/main/artData.json");
      if(!response.ok){
        throw new Error('Failed to fetch products')
      }
      return response.json()
    }
   
);

//create productslice
const productSlice = createSlice({
    name : 'products',
    initialState:{
        items : [],
        loading : 'idle',
        error: null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.loading = 'pending';
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = 'rejected';
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer;