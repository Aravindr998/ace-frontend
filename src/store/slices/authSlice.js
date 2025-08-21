import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem("user") || {}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) =>localStorage.getItem("user"), 
        clearAuth: (state, action) => {}
    }

})

export const {setAuth, clearAuth} = authSlice.actions
export default authSlice.reducer