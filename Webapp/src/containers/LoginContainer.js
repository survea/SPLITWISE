import React from 'react';
import { Login } from '../components/LoginComponent/Login';
import {instance} from '../utilities/AxiosConfig';
import { withRouter } from "react-router-dom";
 class LoginContainer extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.input = {};
        this.state = {invalid: false};
    }
    TakeInput(event){
        this.input[event.target.id] = event.target.value;
    }
    Login(){
        console.log("state of login");
        console.log(this.input.email);
        // validations added
        if (this.input.email == undefined || this.input.password == undefined) {
            alert("form is Incomplete");
        } else {
            var pr = instance.post('/login',this.input);
            pr.then((response)=>{
                console.log(response.data);
                const token = response.data.token;
                localStorage.setItem('jwtToken',token)
                this.props.history.push("/dashboard");
                if(response.data.Status === 'S'){
                    this.props.history.push("/dashboard");
                }
                else if(response.data.Status === 'F'){
                  this.setState({invalid:true});
                  if(response.data.Status === 'F' && response.data.msg === 'Please confirm your email id to start') {
                    alert("Please confirm your email id to start");
                  }
                }
            })
        }
    }
    render(){
        return(
        <Login sts = {this.state.invalid} input = {this.TakeInput.bind(this)} login = {this.Login.bind(this)}/>
        )
    }
}

export default withRouter(LoginContainer);