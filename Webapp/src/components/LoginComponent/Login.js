import React from 'react';
import './Login.scss';
import Header  from '../Header';
import { instance } from '../../utilities/AxiosConfig';
import Footer from '../LandingComponent/Footer';

let userObj = {};
let loginAction = (props) => {
    console.log(userObj);
    if (userObj.password == undefined || userObj.email == undefined) {
        alert("Please fill the required field");
    }
    else {
      var pr = instance.post('/login', userObj);
        pr.then((response) => {
            console.log(response.data.Status);
            if (response.data.Status == "S") {
                alert("successful Loged in");
                props.history.push("/Dashboard");
            } else if (response.data.Status == "F") {
                alert("username or Email Id Already exist");
            }
        })
    }
};

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
          <input  id="email" onChange={(props.input)} className="form-control" type="text" required />
          <label for="password">Password</label>
          <input id="password" onChange={(props.input)} className="form-control" type="text" required />
          {/* checking if the login is successfull or not */}
          {props.sts && <p style = {{color: "red"}}><i className="fas fa-exclamation-circle"></i> Invalid Username or Password</p>}
          <button onClick={props.login} className = "login-btn">Log In</button>
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