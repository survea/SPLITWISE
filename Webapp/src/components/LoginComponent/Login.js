import React from 'react';
import './Login.scss';
import Header  from '../Header';
import Footer from '../LandingComponent/Footer';

export const Login = (props)=>{
    return(

      <div className='container'>
        <Header/>
        <main >
          <div className = "login-feature">
          <div className = "login-content"> 
          < div className = "login-form">
          <h3>Log In</h3>
          <label for="email">Email address</label>
          <input id = "email" onChange = {props.input} type="email" required/>
          <label for="pws">Password</label>
          <input id = "password" onChange = {props.input} type="pws" required/>
          {props.sts && <p style = {{color: "red"}}><i className="fas fa-exclamation-circle"></i> Invalid Username or Password</p>}
          <button onClick = {props.login} className = "login-btn">Log In</button>
        </div>
        </div>
        </div>
        <div>
        </div>
        <Footer/>
        </main>
      </div>
    )
} 