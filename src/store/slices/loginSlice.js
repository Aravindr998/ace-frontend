import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    email:"",
    password:""
}

const loginSlice = createSlice({
    name :" login",
    initialState:initialState,
    reducers:{
        setLoginData:(state,action)=>{
            return action.payload
        }
    }
})

export default loginSlice.reducer
export const {setLoginData}=loginSlice.actions