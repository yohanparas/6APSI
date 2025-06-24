// Main Login Page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    // Authentication to be addded

    // Redirect to home page after login
    navigate('/'); 
  };
 
  return (
    // Login Page Container
    <div className='login-container'>
      <h2 className='login-title'>Login</h2>
      <input className='login-input'
        type="text"
        placeholder="Username"
       
      // Login Input fields
      /><br />
      <input className='login-input'
        type="password"
        placeholder="Password"

      // Login Button
      /><br /> 
      <button className='login-button' onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
