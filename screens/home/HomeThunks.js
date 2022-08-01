import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Hàm get có tham số sẽ được truyền ngay trên link => ?tenThamSo="giatri"&tenThamSo2="giatri"
 */

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        // gọi json để lấy api về
        const json = await resp.json()
        // sau đó gọi content để lấy dữ liệu nằm trong chuỗi content
        return json.content
    }
)
/*
    - async (thamSoA, thunkAPI)
    thunkAPI [object] : dispatch , getState()
    truyền nhiều tham số thì sử dụng dạng object {
        username: value,
        password: value
    }
*/
export const fetchProductsByCategoryId = createAsyncThunk(
    'products/fetchProductsByCategoryId',
    async (category,{dispatch,getState}) => {
        console.log(getState())
        const resp = await fetch(`http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${category.id}`)
        const json = await resp.json()
        return json.content
    }
)

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async () => {
        console.log('kiểm tra fetch category')
        const resp = await fetch('http://svcy3.myclass.vn/api/Product/getAllCategory')
        const json = await resp.json()
        return json.content
    }
)