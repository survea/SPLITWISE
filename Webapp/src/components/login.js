import React from 'react';
export const Login = (props)=>{
    return(
      <div className = "signup-form">
        <h3>WELCOME TO SPLITWISE</h3>
        <label htmlFor="">Email address</label>
        <input id = "email" onChange = {props.input} type="text"/>
        <label htmlFor="">Password</label>
        <input id = "password" onChange = {props.input} type="text"/>
        <button onClick = {props.login} className = "btn">Log In</button>
     </div>
    )
} 