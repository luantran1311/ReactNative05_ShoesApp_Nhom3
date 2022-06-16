import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Hàm get có tham số sẽ được truyền ngay trên link => ?tenThamSo="giatri"&tenThamSo2="giatri"
 */

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        console.log('kiểm tra fetch product')
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        // gọi json để lấy api về
        const json = await resp.json()
        // sau đó gọi content để lấy dữ liệu nằm trong chuỗi content
        return json.content
    }
)

export const fetchProductsByCategoryId = createAsyncThunk(
    'products/fetchProductsByCategoryId',
    async (categoryId) => {
        console.log('kiểm tra fetch product by id')
        const resp = await fetch(`http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${categoryId}`)
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