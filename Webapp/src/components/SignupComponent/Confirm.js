import { instance } from '../../utilities/AxiosConfig';
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

export default class Confirm extends Component {
  
  // A bit of state to give the user feedback while their email
  // address is being confirmed on the User model on the server.
  state = {
    confirming: true
  }

  // When the component mounts the mongo id for the user is pulled  from the 
  // params in React Router. This id is then sent to the server to confirm that 
  // the user has clicked on the link in the email. The link in the email will 
  // look something like this: 
  // 
  // http://localhost:1234/confirm/5c40d7607d259400989a9d42
  // 
  // where 5c40d...a9d42 is the unique id created by Mongo
  componentDidMount = () => {
    const { id } = this.props.match.params

    var pr = instance.get(`/email/confirm/${id}`);
    pr.then((response) => {
        console.log(response.data.Status);
        if (response) {
            this.setState({ confirming: false })
            this.props.history.push("/dashboard");
            // notify.show(data.msg, 'success')
            alert("Email id successfully verified");
        }
    })
  } 

  // While the email address is being confirmed on the server a spinner is 
  // shown that gives visual feedback. Once the email has been confirmed the 
  // spinner is stopped and turned into a button that takes the user back to the 
  // <Landing > component so they can confirm another email address.
  render = () =>
    <div className='confirm'>
      {this.state.confirming
        ? <Spinner size='8x' spinning={'spinning'} /> 
        : <Link to='/'>
            <Spinner size='8x' spinning={''} /> 
          </Link>
      }
    </div>
}