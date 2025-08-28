import React from 'react'



const SignupPage = () => {

  const handleChange=(e)=>{
    const {name,value}=e.target
  }

  const handleClick=()=>{
  console.log('clicked')
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div>SignUp</div>
        <div>
          <h1>First Name</h1>
          <input name='firstName' type='text' placeholder='First Name' onChange={handleChange}/>
        </div>
        <div>
          <h1>Last Name</h1>
          <input name='lastName' type='text' placeholder='Last Name' onChange={handleChange}/>
        </div>
        <div>
          <h1>Email</h1>
          <input name='email' type='email' placeholder='Email' onChange={handleChange}/>
        </div>
        <div>
          <h1>Phone Number</h1>
          <input name='phone' type='number' placeholder='Phone Number' onChange={handleChange}/>
        </div>
        <div>
          <h1>Gender</h1>
          <input name='gender' type='text' placeholder='Gender' onChange={handleChange}/>
        </div>
        <div>
          <h1>Password</h1>
          <input name='password' type='password' placeholder='Password' onChange={handleChange}/>
        </div>
        <div>
          <h1>Confirm Password</h1>
          <input name='confirmpassword' type='password' placeholder='Confirm Password' onChange={handleChange}/>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
        <div>
          Already a Customer?<a href='/login'>Login</a>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
