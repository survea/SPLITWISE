import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { instance } from '../../../utilities/AxiosConfig';
import profile from '../../../images/person-profile.png';
import "./DashHeader.scss";
import "../popups/frndPop.scss";

let userObj = {};
let openForm = (prop) =>{
  document.getElementById("openForm").style.display = "block";
}

let closeForm = (prop) =>{
  document.getElementById("openForm").style.display = "none";
}
// function to update the profile
let updateProfile = (props) =>{
  if (props.user.username == undefined || props.user.password == undefined || props.user.email == undefined) {
      alert("form is Incomplete");
  }
  else {
      console.log(props.user);
      console.log(props.user._id);
      console.log("printed");
      var pr = instance.post('/updateUser/'+`${props.user._id}`, props.user);
      pr.then((response) => {
          console.log(response.data.Status);
          if (response.data.Status == "S") {
              alert("updated successfully");
          } else if (response.data.Status == "F") {
              alert("username or Email Id Already exist");
          }
      })
  }
}
// function to display dash header
const DashHeader = (props) => {
  return (
    <nav className="DashNav fixedTop">
      <NavLink to="/dashboard"><h3 className="landing-name">S P L I T W I S E</h3></NavLink>

      <div className="Dash-float">
        <NavLink to="/login"><button className="logout-btn" onClick={() => {
          localStorage.removeItem('jwtToken');
        }
        }>Log Out</button></NavLink>
        <button className="profileBtn">
          <img className="profile" src={profile} alt="" srcset="" />
        </button>
        <NavLink to="/dashboard"><label htmlFor=""  onClick={() => { openForm(props);}}  className="landing-name">{props.user.username}</label></NavLink>
        <div id = "openForm">
        <div className="friendPopup">
        <div className="frnd-content">
          <div className="frnd-header">
            <span>My profile Details</span>
          </div>
          <lable className= "lblBlack">Name</lable>
          <input id="username" 
            onChange={(event) => {
              props.user.username  = event.target.value;
            }} 
            defaultValue ={props.user.username} 
            placeholder="Name"
            className="frnd-name" 
            type="text" />
          <lable className= "lblBlack">Email</lable>
          <input id="email" 
            onChange={(event) => {
              props.user.email = event.target.value;
            } }
            defaultValue ={props.user.email} disabled
            placeholder= "Password" 
            className="frnd-name" 
            type="text"/>
          <lable className= "lblBlack">Change Password</lable>
          <input
            id="password"
            onChange={(event) => {
              props.user.password = event.target.value;
           }}
           defaultValue ={props.user.password} 
           placeholder="Password"
            className="frnd-name"
            type="password"
          />
          <div className="pop-btn">
            <button className="btn Add"
              onClick={() => { updateProfile(props);}}
            >
              Update Profile
            </button>
            <button className="btn cut" onClick={() => { closeForm(props);}}>
              Close
            </button>
          </div>
        </div>
      </div>
        </div>
        
      </div>
    </nav>
  )
}


const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(DashHeader);

