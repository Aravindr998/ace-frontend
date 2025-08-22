import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setLoginData } from '../store/slices/loginSlice'
import { setAuth } from '../store/slices/authSlice'
import { loginForm } from '../../constant/login'
import isEmpty from 'lodash/isEmpty'


const LoginPage = () => {
  const formData =useSelector((state)=>state.login)
  const[error,setError]=useState({})
  const dispatch = useDispatch();


  const handleChange =(e)=>{
    const{name,value}=e.target
    setError((prevState)=>{
      return{
        ...prevState,
        [name]:"",
      }
    })
    dispatch(
      setLoginData({
        [name]:value,
      })
    )
  }

  const validateForm =()=>{
    const newErrors = {}
    const isEmail =(email) =>{
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    }
    const strongPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/
    const isStrongPassword = (password)=> strongPassword.test(password)
    loginForm.map(({ key, label, required, type })=>{
      if (required) {
        if (!formData[key]) {
          newErrors[key] = `${label} is required`
        } else {
          if (type === "email" && !isEmail(formData[key])) {
            newErrors[key]="Please enter a valid email"
          } else if (type === "password" && !isStrongPassword(formData[key])) {
            formData[key] = "Password must be a minimum of 8 characters including number, Upper, Lower And one special character"
          }
        }
      }
    })
    return newErrors
  }
  
  const handleSubmit =(e)=>{ 
    const getFormData = localStorage.getItem("formData")
    e.preventDefault()
    const errors = validateForm()
    if(isEmpty(errors)){
      if(getFormData && getFormData.length){
        const userData = JSON.parse(getFormData)
        if(userData.length>0){
          userData?.map((item)=>{
            if(
              item?.email === formData.email &&
              item?.password === formData.password
            ){
              localStorage.setItem("user",true)
              dispatch(setAuth())
            }
          })
        }else{
          alert("invalid details")
        }
      }
    }else{
      setError({...errors})
    }

  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div className='font-bold'>LOGIN</div>
        {
          loginForm.map(({ key, label, placeholder, required, type }) => {
            switch (key) {
            
              default:
                return (
                  <div>
                    <h1>{label}{required && <sup>*</sup>}</h1>
                    <input
                      name={type}
                      type={type}
                      placeholder={placeholder}
                      value={formData?.[key]}
                      onChange={handleChange}

                    />
                    {
                      error[key] && (
                        <div>
                          {error[key]}
                        </div>
                      )
                    }
                  </div>
                )
            }
          })
        }
        <div>
          <button>LOGIN</button>
        </div>
        <div>
          <a href='/signup'>Sign Up With Email And Password</a>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginPage