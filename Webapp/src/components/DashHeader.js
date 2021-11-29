import React from 'react'
import {NavLink} from 'react-router-dom';

import '../Styles/dashHeader.scss'
 const DashHeader = (props)=>{
    
    return (
        <nav className = "DashboardNav fixed-top">
        <NavLink to = "/Dashboard"><h3 className = "landing-name">Expense Tracker</h3></NavLink> 
     
     <div className = "Dashfloat">
     <NavLink to = "/login"><button className = "logoutbtn" onClick = {()=>{
       localStorage.removeItem('jwtToken');
     }
     }>Log Out</button></NavLink>
      
     
      
     </div>
        

    </nav>
    )
}


export default fn(DashHeader);

