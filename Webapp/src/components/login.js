import React from 'react';
import '../Styles/login.scss';
export const Login = (props)=>{
    return(
      <div className='container'>
        <div className = "login-form">
        <h3>Log In</h3>
        <label htmlFor="">Email address</label>
        <input id = "email" onChange = {props.input} type="text"/>
        <label htmlFor="">Password</label>
        <input id = "password" onChange = {props.input} type="text"/>
        <button onClick = {props.login} className = "login-btn">Log In</button>
        </div>
      </div>
      
    )
} 