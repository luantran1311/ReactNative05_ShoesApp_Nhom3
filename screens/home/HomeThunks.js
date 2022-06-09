import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async() => {
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        const json = await resp.json()
        
        return json.content
    }
)