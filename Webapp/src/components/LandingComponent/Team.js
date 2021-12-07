// Importing the required resources for the Team page

import React from 'react'
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from './Footer';
import Aishwarya from '../../images/Aishwarya.jfif'
import Diksha from '../../images/Diksha.jfif'
import Nishitha from '../../images/Nishitha.jfif'
import Rajiv from '../../images/Rajiv.jfif'

import '../LandingComponent/Team.scss';


/**
 * The FAQ class contains the information of our Team for our app
 * @param {*} props 
 * @returns 
 */

const Teams = (props) => {
    return (
        <div className="faq">
            <Header />
            <main>
                <nav>

                    <div id="container">
                        <p className="image-desc">
                            <img src={Aishwarya} alt="Aishwarya" />
                            <img src={Diksha} alt="Diksha" />
                            <img src={Nishitha} alt="Nishitha" />
                            <img src={Rajiv} alt="Rajiv" />

                        </p>
                        <div class="box-text">
                            <h1>&nbsp;&nbsp;&nbsp;&nbsp;Meet our Teammates</h1>

                        </div>
                    </div>
                    <p>
                        <div className="team-members">
                            <ul>
                                <li>
                                    <i className="fas fa-check-circle"></i> &nbsp;&nbsp;
                                    Aishwarya Surve</li>
                                <li>
                                    <i className="fas fa-check-circle"></i> &nbsp;&nbsp;

                                    Diksha Godse</li>
                                <li>
                                    <i className="fas fa-check-circle"></i> &nbsp;&nbsp;

                                    Nishitha Surendran</li>
                                <li>
                                    <i className="fas fa-check-circle"></i> &nbsp;&nbsp;
                                    Rajiv Ranjan Sahu</li>
                            </ul>

                        </div>
                    </p>

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

// Exporting as default Teams to the landing page

const fn = connect(mapStateToProps);
export default fn(Teams);