import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {}
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload
        },
        clearAuth: (state, action) => {
            state.user = {}
        }
    }

})

export const {setAuth, clearAuth} = authSlice.actions
export default authSlice.reducer