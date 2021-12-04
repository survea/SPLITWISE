import React from 'react';
import './Login.scss';
export const Login = (props)=>{
    return(
      <div className='container'>
        <div className = "login-form">
        <h3>Log In</h3>
        <label htmlFor="">Email address</label>
        <input id = "email" onChange = {props.input} type="text"/>
        <label htmlFor="">Password</label>
        <input id = "password" onChange = {props.input} type="text"/>
        {props.sts && <p style = {{color: "red"}}><i className="fas fa-exclamation-circle"></i> Invalid Username or Password</p>}
        <button onClick = {props.login} className = "login-btn">Log In</button>
        </div>
      </div>
      
    )
} 