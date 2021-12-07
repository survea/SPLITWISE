import React from 'react'
import { connect } from 'react-redux';

import './about.scss'
import bottomImage from '../../images/splitwise-bottom.JPG'

const Footer = (props) => {
    return (
        <nav>
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