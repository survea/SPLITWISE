import React from 'react';
import { instance } from '../../utilities/AxiosConfig';
import './Signup.scss';
import { withRouter } from "react-router-dom";
import logo from '../../images/logo.png'


let userObj = {};
let signupAction = (props) => {
    console.log(userObj);
    if (userObj.username == undefined || userObj.password == undefined || userObj.email == undefined) {
        alert("form is Incomplete");
    }
    else {
        var pr = instance.post('/signup', userObj);
        pr.then((response) => {
            console.log(response.data.Status);
            if (response.data.Status == "S") {
                alert("successful Registerd");
                props.history.push("/Dashboard");
            } else if (response.data.Status == "F") {
                alert("username or Email Id Already exist");
            }
        })
    }
};
const SignUp = (props) => {
    return (
        <div className="signup-feature">
            
        <div className="container signup">
        <img className="signup-img-logo" src={logo} alt="SplitWise Logo"/>
            <div className="signup-form">
            
                <h3 className="title-styling">INTRODUCE YOURSELF</h3>
                <label htmlFor="">Hi there! My name is</label>

                <input id="username" onChange={(event) => {
                    userObj[event.target.id] = event.target.value;
                }} className="form-control" type="text" required />

                <label htmlFor="">Here’s my email address: </label>

                <input id="email" onChange={(event) => {
                    userObj[event.target.id] = event.target.value;
                }} className="form-control" type="text" required />

                <label htmlFor="">And here’s my password:  </label>

                <input id="password" onChange={(event) => {
                    userObj[event.target.id] = event.target.value;
                }} className="form-control" type="text" required />

                <button onClick={() => { signupAction(props); }
                } className="btn">Sign me up!</button>
            </div>
        </div>
        </div>


    )
}

export default withRouter(SignUp);
