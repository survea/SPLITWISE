import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import "./DashHeader.scss"
 const DashHeader = (props)=>{
    
    return (
        <nav className = "DashNav fixedTop">
        <NavLink to = "/Dashboard"><h3 className = "landing-name">E X P E N S E    T R A C K E R</h3></NavLink> 
     
     <div className = "Dash-float">
     <NavLink to = "/login"><button className = "logout-btn" onClick = {()=>{
       localStorage.removeItem('jwtToken');
     }
     }>Log Out</button></NavLink>
      
     
      
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

