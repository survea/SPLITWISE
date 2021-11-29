import React from 'react'
import {NavLink} from 'react-router-dom';

import '../Styles/landing.scss'
 const Header = (props)=>{
    return (
        <nav className = "landingNav fixed-top">
        <NavLink to = "/"><h3 className = "landing-name">Expense Tracker</h3></NavLink> 
     
     <div className = "float">
     <NavLink to = "/login"><button className = "loginBtn">Log In</button></NavLink>
        <label htmlFor="">or</label>
        <NavLink to = "/signup"><button className = "SignUp">Sign Up</button></NavLink>
     </div>
        

    </nav>
    )
}

export default Header;