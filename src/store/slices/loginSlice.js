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
            return {...state, ...action.payload}
        }
    }
})

export default loginSlice.reducer
export const {setLoginData}=loginSlice.actions