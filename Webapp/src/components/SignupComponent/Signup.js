import { instance } from '../../utilities/AxiosConfig';
import './Signup.scss';
import logo from '../../images/logo.png';
import React, { Component } from 'react';
import Header  from '../Header';
import Footer from '../LandingComponent/Footer';
export default class SignUp extends Component {

    // A bit of state to give the user feedback while their email address is being 
    // added to the User model on the server.
    state = {
        sendingEmail: false
    }
    userObj = {};

    onSubmit = event => {
        event.preventDefault()
        this.setState({ sendingEmail: true })
        var pr = instance.post('/email', {
            username: this.username.value,
            password: this.password.value,
            email: this.email.value
        });
        pr.then((response) => {
            console.log(response.data.Status);
            if (response.data.msg == "Email sent, please check your inbox to confirm") {
                alert(response.data.msg);
                this.setState({ sendingEmail: false })
                this.form.reset();
            } else {
                alert(response.data.msg);
                this.setState({ sendingEmail: false })
                this.form.reset();
            }
        })
    }

    render = () => {

        // This bit of state provides user feedback in the component when something
        // changes. sendingEmail is flipped just before the fetch request is sent in 
        // onSubmit and then flipped back when data has been received from the server.
        const { sendingEmail } = this.state

        return (
            // A ref is put on the form so that it can be reset once the submission
            // process is complete.
            <div>
            <Header/>
            <div className="signup-feature">
                <main>
                <div className="container signup">
                    <img className="signup-img-logo" src={logo} alt="SplitWise Logo" />
                    <form
                        onSubmit={this.onSubmit}
                        ref={form => this.form = form} className="signup-form">

                        <h3 className="title-styling">INTRODUCE YOURSELF</h3>
                        <label htmlFor="">Hi there! My name is</label>

                        <input id="username" ref={input => this.username = input} className="form-control" type="text" required />

                        <label htmlFor="">Here’s my email address: </label>

                        <input
                            type='email'
                            name='email'
                            ref={input => this.email = input} className="form-control"
                            required
                        />

                        <label htmlFor="">And here’s my password:  </label>

                        <input id="password" ref={input => this.password = input}
                            className="form-control" type="text" required />

                        <button type='submit' className='btn' disabled={sendingEmail}>Sign me up!</button>
                    </form>
                </div>
                </main>
            </div>
            <Footer/>
            </div>
            
        )
    }
}
