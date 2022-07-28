import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchGetProductbyId = createAsyncThunk(
    'productbyid/fetchGetProductById',
    async (product) => {
        const resp = await fetch(`https://shop.cyberlearn.vn/api/Product/getbyid?productId=${product.id}`)
        const json = await resp.json()
        return json.content
    }
)