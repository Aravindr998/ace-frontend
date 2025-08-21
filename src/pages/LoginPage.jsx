import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setLoginData } from '../store/slices/loginSlice'
import { setAuth } from '../store/slices/authSlice'


const LoginPage = () => {
  const formData =useSelector((state)=>state.formData)
  const[error,setError]=useState({})
  const dispatch = useDispatch();


  const handleChange =(e)=>{
    const{name,value}=e.target
    error[name] = ""
    setError({
      ...error,
    })
    setError((prevState)=>{
      return{
        ...prevState,
        [name]:"",
      }
    })
    dispatch(
      setLoginData({
        ...formData,
        [name]:value,
      })
    )
  }

  const validateForm =()=>{
    let isValid=true
    const newErrors = {}
    const isEmail =(email) =>{
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    }
    const strongPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/
    const isStrongPassword = (password)=> strongPassword.test(password)
    const types = ["email","password"]
    types.map((type)=>{
      switch(type){
        case "email":
          if(!formData.email){
            newErrors.email = "Email is required"
            isValid = false
          }else if(!isEmail(formData.email)){
            newErrors.email="Please enter a valid email"
            isValid = false
          }
          break;
        case "password":
          if(!formData.password){
            newErrors.password = "Password is required"
            isValid = false
          }else if(!isStrongPassword(formData.password)){
            newErrors.password = "Password must be a minimum of 8 characters including number, Upper, Lower And one special character"
            isValid = false
            }
          break;
        default:
          break;
      }
    })
    setError(newErrors)
    return isValid
  }
  
  const handleSubmit =(e)=>{ 
    const getFormData = localStorage.getItem("formData")
    e.preventDefault()
    if(validateForm()){
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
      console.log(error)
    }

  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div className='font-bold'>LOGIN</div>
        <div>
          <h1>Email</h1>
          <input
            name='email'
            type='email'
            placeholder='Email Address'
            value={formData?.email}
            onChange={handleChange}

          />
          {
            error.email && (
              <div>
                {error.email}
              </div>
            )
          }
        </div>
        <div>
          <h1>Password</h1>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={formData?.password}
            onChange={handleChange}/>
            {
              error.password && (
                <div>
                  {error.password}
                </div>
              )
            }
        </div>
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