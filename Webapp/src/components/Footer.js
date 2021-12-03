import React from 'react'
import { connect } from 'react-redux';

import '../Styles/footer.scss'
import bottomImage from '../images/splitwise-bottom.JPG'
import facebook from '../images/Group 9740.png'
import twitter from '../images/Group 9741.png'
import instagram from '../images/Group 9742.png'
import telegram from '../images/Group 9743.png'


const Footer = (props) => {
    return (
        <nav>
            <div className="social-handle">
                <span class="social-handle-icons">
                    <div><a href="https://www.splitwise.com/about">About</a></div>
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
            <div className="about">

            </div>

            <div className="footer-img">
                <img className="bottom-img" src={bottomImage} alt="bottomImage" />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log("state is  ", state);
    return {
        user: state.user
    }
}

const fn = connect(mapStateToProps);
export default fn(Footer);