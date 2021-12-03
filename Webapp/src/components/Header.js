import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import '../components/LandingComponent/Landing.scss'
 const Header = (props)=>{
    return (
        <nav className = "landingNav fixed-top">
        <NavLink to = "/">
        
        <h3 className = "landing-name">S P L I T W I S E</h3></NavLink> 
     
     <div className = "float">
     <NavLink to = "/login"><button className = "loginBtn">Log In</button></NavLink>
        <label htmlFor="">or</label>
        <NavLink to = "/signup"><button className = "SignUp">Sign Up</button></NavLink>
     </div>
        


    </nav>
    )
}

const mapStateToProps = (state)=>{
   console.log("state is  ",state);
   return{
       user: state.user
   }
}

const fn = connect(mapStateToProps);
export default fn(Header);