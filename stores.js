import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from './screens/home/HomeSlice'
import LoginReducer from './screens/account/LoginSlice'
export const store = configureStore({
    reducer: {
        home: HomeReducer,
        login: LoginReducer,
    }
})