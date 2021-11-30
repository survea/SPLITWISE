import React from 'react';
import '../Styles/landing.scss'
import  Header  from './Header';
export const Landing = ()=>{
    return (
        <div className = "landing">
           <Header/>

        
            <main >
                <div className = "landing-heading">

                <h1 className = "landing-header">Track your individual expenses.</h1>
                <p className = "landing-desc"><strong>Share</strong> bills. <strong>And make sure</strong> the bills are splitted and settled-up.</p>
               
                </div>
                
                <div className = "landing-feature">
                 <div>   
              
                </div>
                <div className = "landing-content">
                <h1>Splitting expenses are now a piece of cake.</h1> 
                <ul>
                    <li><i className="share-bills"></i> &nbsp;&nbsp;Share Bills</li>
                    <li><i className="distribute-bills"></i> &nbsp;&nbsp;Distribute Bills</li>
                </ul>

                <a href="http://localhost:3000/signup">   <button className = "landing-button">  Get Started</button></a>
                </div>
                </div> 
            </main>
        </div>
    )
}