import React, { useState } from "react";
import axios from 'axios'

const Login = props => {
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

  const onSubmitHandler = event => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/api/login', loginDetails)
      .then(result => {
        console.log('✅ axios login result: ', result.data.payload)
        localStorage.setItem('token', result.data.payload)
        props.history.push("/bubblespage");
      })
      .catch(error => console.log('❌ axios login error: ', error))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmitHandler}>
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
        <button onClick={onSubmitHandler}>Sign In</button>
      </form>
    </>
  );
};

export default Login;
