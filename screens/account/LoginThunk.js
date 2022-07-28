import { createAsyncThunk } from '@reduxjs/toolkit'
import { KEY_ACCESS_TOKEN } from '../../common/Constants'
import { loadLocalStorage } from '../../common/LocalStorage'

export const checkLogin = createAsyncThunk(
    'login/checkLogin',
    async (params) => {
        let resp = await fetch('https://shop.cyberlearn.vn/api/Users/signin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: params.email,
                password: params.password
            })
        })
        let json = await resp.json()

        return json.content.accessToken // action.payload
    }
)

export const getLocalAccessToken = createAsyncThunk(
    'token/getLocalAccessToken',
    async () => {
        let token = await loadLocalStorage(KEY_ACCESS_TOKEN)
        console.log(`kiem tra token local`)
        console.log(token)
        if(token == undefined || token == null){
            return ""
        } else {
            return token
        }
    }
)