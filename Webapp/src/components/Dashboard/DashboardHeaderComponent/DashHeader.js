import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import profile from '../../../images/person-profile.png';

import "./DashHeader.scss"
 const DashHeader = (props)=>{
    
    return (
        <nav className = "DashNav fixedTop">
        <NavLink to = "/Dashboard"><h3 className = "landing-name">S P L I T W I S E</h3></NavLink> 
     
     <div className = "Dash-float">
     <NavLink to = "/login"><button className = "logout-btn" onClick = {()=>{
       localStorage.removeItem('jwtToken');
     }
     }>Log Out</button></NavLink>
      <button className = "profileBtn" onClick={props.profile}>
      <img className = "profile" src={profile} alt="" srcset=""/>
      </button>
      
      <label htmlFor="">{props.user.username}</label>
      
     
      
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

