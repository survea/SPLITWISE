// Importing the required resources for the About Info page

import React from 'react'
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from './Footer';
import SplitwiseBlog from '../../images/SplitwiseBlog.JPG';

import '../LandingComponent/AboutInfo.scss';


/**
 * The AboutInfo class contains the about information for our app
 * @param {*} props 
 * @returns 
 */

const AboutInfo = (props) => {
    return (
        <div className="about-info">
            <Header />
            <main>
                <nav >
                    <div>
                        <img className="blog-image" src={SplitwiseBlog} aria-hidden alt="SplitwiseBlogImage" height="250px" width="350" />
                    </div>
                    <div className="about-info-desc">
                        <p>
                            Splitwise wants to totally take the stress out of sharing expenses and creating IOUs with friends.
                            A huge part of that is facilitating communication around who owes who, and for what.
                            We’re always looking for new ways to help you and your friends get (and stay!) on the same page.
                        </p>
                        <p className="quote">
                            It already feels pretty freaking great to pay your friends back,
                            and Splitwise has just added a web feature that makes settling up even more satisfying.
                        </p>
                    </div>
                </nav>
                <Footer />
            </main>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("state is  ", state);
    return {
        user: state.user
    }
}

// Exporting as default AboutInfo to the landing page

const fn = connect(mapStateToProps);
export default fn(AboutInfo);