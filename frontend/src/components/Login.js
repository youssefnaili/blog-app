import React, {useState} from 'react'
import './login.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


function Login() {

  const [values,setValues] = useState({
    email:'',
    password:''
  });

  const navigate  = useNavigate()
  const handleSubmit=async(event)=>{
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/api/user/login',values);
      localStorage.setItem('token',response.data.token)
      navigate('/home')
    }catch(error){
      console.error('error',error);
    }
  }

return (

    <div className='login-container'>
      <h2>Sign-In</h2>

      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input onChange={e=>setValues({...values, email: e.target.value})} type='text' placeholder='Enter your email' name='email' />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input onChange={e=>setValues({...values, password: e.target.value})} type='password' placeholder='Enter your password' name='password' />
        </div>

<button className='login btn' type='submit'>Log in</button>

        <p>You are agree to our terms and policies</p>

        <Link  to="/signup" type='submit' className='create-account'>Create Account</Link>




      </form>

    </div>
  )
}

export default Login