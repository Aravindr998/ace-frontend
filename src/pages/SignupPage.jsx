import React, { useState } from 'react'
import { signupForm } from '../../constant/signup'
import { useDispatch, useSelector } from 'react-redux'
import { setSignupData } from '../store/slices/registerSlice'




const SignupPage = () => {

  const formData = useSelector((state)=>state.register)
  const dispatch = useDispatch()


  console.log('formData', formData)
  const handleChange=(e)=>{
    const {name,value}=e.target
    dispatch(
      setSignupData({
        [name]:value
      })
    )
  }

  const validateForm=()=>{
    console.log('first')
    const isEmail = (email)=>{ /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)}
    const isStrongPassword =(password)=>{/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password)}
    if(isEmail(formData?.email)){
      alert('hi')
      console.log('true')  
    }else{
      console.log('false')
    }
    if(isStrongPassword(formData?.password)){
      alert('hi')
      console.log('false');
    }else{
      console.log('true')
    }
  }

  const handleClick=(e)=>{
    console.log('first')
     e.preventDefault()
     validateForm()

  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div>SignUp</div>
        <div>
          {
            signupForm.map(({key, label, placeholder, required, type})=>{
              return (
              <> 
              <h1>{label}</h1>
              <input name={type} value={formData?.[key]}  type={type} placeholder={placeholder} label={label} onChange={handleChange} required/>
              </>
              )
            })
          }
        </div>
        <div>
          <button>Sign Up</button>
        </div>
        <div>
          <a href='/login'>Already a Customer?Login</a>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
