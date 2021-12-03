// Importing the required resources for the landing page

import React from 'react';
import '../Styles/landing.scss'
import Header  from './Header';

export const Landing = ()=>{
    return (
        <div className = "landing">

            {/* Using header for the top nav landing page */}

           <Header/>

            <main >
                {/* Creating the landing header part of the landing page */}
                <div className = "landing-heading">
                <h1 className = "landing-header">Less stress when sharing expenses with anyone.</h1>
                <p className = "landing-desc"><strong>Share</strong> bills. And make sure the bills are <strong>splitted in the right way</strong> and <strong>settled-up</strong>.</p>
                <p className = "image-desc">
                    <img src="https://www.splitwise.com/assets/home_page/fixtures/asset1@2x.png" height="600" width="375" aria-hidden alt="Image features"/>
                    <img src="https://www.splitwise.com/assets/home_page/fixtures/asset2@2x.png" height="600" width="375" aria-hidden alt="Image features"/>
                    <img src="https://www.splitwise.com/assets/home_page/fixtures/asset3@2x.png" height="600" width="375" aria-hidden alt="Image features"/>
                    <img src="https://www.splitwise.com/assets/home_page/fixtures/asset4@2x.png" height="600" width="375" aria-hidden alt="Image features"/>
                </p>
                
                </div>
                {/* Creating the landing feature of the landing page */}
                <div className = "landing-feature">
                    <div className = "landing-content">
                        <h1>Splitting expenses are now a piece of cake.</h1> 
                            <div id="animated_div">Bills and More!</div>
                            <ul>
                                <li><i className="fas fa-check-circle"></i> &nbsp;&nbsp;Share Bills</li>
                                <li><i className="fas fa-check-circle"></i> &nbsp;&nbsp;Distribute Expenses</li>
                                <li><i className="fas fa-check-circle"></i> &nbsp;&nbsp;With housemates, friends and family.</li>
                            </ul>

                        <a href="http://localhost:3000/signup">   <button className = "landing-button">  Get Started</button></a><br/><br/>
                    </div>
                </div> 
               
            </main>
        </div>
    )
}