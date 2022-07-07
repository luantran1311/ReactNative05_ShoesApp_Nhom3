import { createAsyncThunk } from '@reduxjs/toolkit'

export const checkLogin = createAsyncThunk(
    'login/checkLogin',
    async (params) => {
        let resp = await fetch('http://svcy3.myclass.vn/api/Users/signin', {
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