import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
            state.isLoggedIn =  true

        },
        logout: (state) => {
            state.user = null
            state.isLoggedIn = false
        },
        register: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = false
        }
    }
})


export const {loginSuccess, logout, register} = authSlice.actions

export default authSlice.reducer