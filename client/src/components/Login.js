import React, { useState } from "react";
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  })
  
  console.log(loginDetails)
  
  const onChangeHandler = event => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input 
          type='text' 
          name='username' 
          value={loginDetails.username} 
          placeholder='Username' 
          onChange={onChangeHandler} 
        />
        <input 
          type='text' 
          name='password' 
          value={loginDetails.password} 
          placeholder='Password' 
          onChange={onChangeHandler} 
        />
        <button>Sign In</button>
      </form>
    </>
  );
};

export default Login;
