import { createSlice } from "@reduxjs/toolkit";
import { fetchGetProductbyId } from "./DetailThunk";

const initialState = {
    detailProduct: [],
}

const detailSlice = createSlice({
    name: 'detailSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetProductbyId.fulfilled,(state,action)=> {
            console.log('call product by id')  
            state.detailProduct = action.payload
        })
    }
    
})