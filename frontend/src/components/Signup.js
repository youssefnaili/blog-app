import React, {useState} from 'react';
import './signup.css'; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



function Signup() {

  const [values,setvalues]=useState({
    userName:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const handleSubmit=async(event)=>{
    event.preventDefault();
    try{
    const response = await axios.post('http://localhost:3000/api/user/signup', values)
     localStorage.setItem('token',response.data.token);
     navigate('/login')
    }catch(error){
      console.error("error",error);
    }
  }

    return (
        <div className='signup-container'>
      <h2>Sign-up</h2>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input onChange={e=>setvalues({...values, name: e.target.value})} type='text' placeholder='Enter your name' name='name' />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input onChange={e=>setvalues({...values, email: e.target.value})}  type='text' placeholder='Enter your email' name='email' />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input onChange={e=>setvalues({...values, password: e.target.value})}  type='password' placeholder='Enter your password' name='password' />
        </div>

<div className='form-group'>
          <input
            type='checkbox'
            id='terms'
            name='terms' 
          /> 
          <label htmlFor='terms'>I agree to the terms and policies</label>
        </div>

        <button className='signup btn' type='submit'>Sign up</button>
        <Link className='link' to="/login" type='submit'>Log in</Link>
        <Link className='home' to="/home" type='submit'>Home</Link>




      </form>

    </div>

  );
}



export default Signup;