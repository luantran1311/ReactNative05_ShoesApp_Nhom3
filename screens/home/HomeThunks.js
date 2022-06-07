import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async() => {
        console.log('kiểm tra fetch product')
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        const json = await resp.json()
        
        return json.content
    }
)