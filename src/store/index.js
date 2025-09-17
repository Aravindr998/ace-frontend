import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import loginReducer from "./slices/loginSlice"
import signupReducer from "./slices/registerSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        login: loginReducer,
        register:signupReducer
    }
})