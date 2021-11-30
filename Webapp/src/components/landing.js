import React from 'react';
import '../Styles/landing.scss'
import  Header  from './Header';
export const Landing = ()=>{
    return (
        <div className = "landing ">
           <Header/>

        
            <main >
                <div className = "landing-heading">

                <h1 className = "landing-header">Track expenses with friends.</h1>
                <p className = "landing-desc"><strong>Share</strong> bills. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web</p>
               
                </div>
                
                <div className = "landing-feature">
                 <div>   
              
                </div>
                <div className = "landing-content">
                <h1  >Splitting expenses has </h1><h1>never been easier .</h1> 
                <ul>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Share Bills</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Distribute bills</li>
                </ul>

                <a href="http://localhost:3000/signup">   <button className = "landing-button">  Get Started</button></a>
                </div>
                </div> 
            </main>
        </div>
    )
}