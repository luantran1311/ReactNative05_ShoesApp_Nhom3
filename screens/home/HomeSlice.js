import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './HomeThunks';

const initialState = {
    isLoading: false,
    dataProduct: []
}

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.dataProduct = action.payload
        })
    }
})

export default homeSlice.reducer