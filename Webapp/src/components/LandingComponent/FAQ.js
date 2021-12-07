// Importing the required resources for the FAQ page

import React from 'react'
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from './Footer';
import SplitwiseFAQImage from '../../images/SplitwiseFAQ.JPG';

import '../LandingComponent/FAQ.scss';


/**
 * The FAQ class contains the about information for our app
 * @param {*} props 
 * @returns 
 */

const FAQ = (props) => {
    return (
        <div className="faq">
            <Header />
            <main>
                <nav >
                    <div>
                        <img className="faq-image" src={SplitwiseFAQImage} aria-hidden alt="SplitwiseFAQImage" height="250px" width="350px" />
                    </div>
                    <div className="faq-desc">
                        <p>
                            Today, Splitwise is launching a major refresh of our entire platform, including our mobile apps,
                            homepage, and logo.
                        </p>
                        <p>
                            We’ve rebuilt all the most important screens in a modern new style. Improvements and features include:
                        </p>
                        <ul>
                            <li >
                                <i className="fas fa-check-circle"></i> &nbsp;&nbsp;Updated visual identity: app icon, colors, default avatars
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i> &nbsp;&nbsp; Redesigned core screens
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i> &nbsp;&nbsp;Faster settlement of expense flows
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i> &nbsp;&nbsp;Small improvements throughout the app
                            </li>
                        </ul>
                        <p>
                            Our goal for this redesign was to keep Splitwise easy and simple to use,
                            while refreshing the interface to feel modern, clean, and polished.
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

// Exporting as default FAQ to the landing page

const fn = connect(mapStateToProps);
export default fn(FAQ);