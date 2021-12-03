// Importing the required resources for the landing page

import React from 'react';
import '../Styles/landing.scss'
import Header  from './Header';
import Footer  from './Footer';
import asset1 from '../images/asset1@2x.png';
import asset2 from '../images/asset2@2x.png';
import asset3 from '../images/asset3@2x.png';
import asset4 from '../images/asset4@2x.png';

/**
 * This is the main landing page of our app
 * @returns 
 */

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
                    <img src={asset1} aria-hidden alt="Image features" height="600" width="375"/>
                    <img src={asset2} aria-hidden alt="Image features" height="600" width="375"/>
                    <img src={asset3} aria-hidden alt="Image features" height="600" width="375"/>
                    <img src={asset4} aria-hidden alt="Image features" height="600" width="375"/>
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
                {/* Using the Footer for the landing page */}
                
               <Footer/>
            </main>
        </div>
    )
}