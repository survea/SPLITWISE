// Importing the required resources for the About page

import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './about.scss'

import facebook from '../../images/Group 9740.png'
import twitter from '../../images/Group 9741.png'
import instagram from '../../images/Group 9742.png'
import telegram from '../../images/Group 9743.png'


const About = (props) => {
    return (
        <nav>
            <div className="social-handle">
                <span class="social-handle-icons">
                    <div>
                        <NavLink to="/aboutus">About</NavLink>
                    </div>
                    <div><a href="https://blog.splitwise.com/">FAQ</a> <span className="about">Made with :) in Boston, MA, USA</span> </div>
                    <div><a href="https://dev.splitwise.com/">Partners</a></div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
                        <a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a>
                        <a href="https://www.instagram.com/"><img src={instagram} alt="instagram" /></a>
                        <a href="https://telegram.org/"><img src={telegram} alt="telegram" /></a>
                    </div>
                </span>
            </div>
        </nav>
    )
}

// Exporting as default About Section to the landing page

const mapStateToProps = (state) => {
    console.log("state is  ", state);
    return {
        user: state.user
    }
}

const fn = connect(mapStateToProps);
export default fn(About);