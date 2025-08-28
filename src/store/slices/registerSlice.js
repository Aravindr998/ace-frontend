import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    gender:"",
    password:"",
    confirmpassword:"",
}

const signupSlice = createSlice({
    name:"signup",
    initialState:initialState,
    reducers:{
        setSignupData:(state,action)=>{
            return {...state,...action.payload}
        }
    }
})

export default signupSlice.reducer
export const {setSignupData}=signupSlice.actions