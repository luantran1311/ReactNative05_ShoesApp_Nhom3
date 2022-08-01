import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories, fetchProducts, fetchProductsByCategoryId } from './HomeThunks';

const initialState = {
    isLoading: false,
    dataProduct: [],
    dataCategories: []
}

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        /* 
            update giá trị trả ra từ thunk lên store chung
        */
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.dataProduct = action.payload
        }).addCase(fetchCategories.fulfilled, (state, action) => {
            state.dataCategories = action.payload
        }).addCase(fetchProductsByCategoryId.fulfilled, (state, action) => {
            console.log('fetch product fulfilled')
            state.dataProduct = action.payload
        })
    }
})

export default homeSlice.reducer