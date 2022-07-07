import { createSlice } from '@reduxjs/toolkit'
import { checkLogin } from './LoginThunk'
import { saveLocalStorage } from '../../common/LocalStorage'
import { KEY_ACCESS_TOKEN } from '../../common/Constants'



const initialState = {
    isLoading: false,
    accessToken: ''
}


const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(checkLogin.fulfilled, (state, action) => {
            state.accessToken = action.payload
            // lưu offline
            saveLocalStorage(KEY_ACCESS_TOKEN, action.payload)
        })
    }
})

export default loginSlice.reducer