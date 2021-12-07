import React from "react";
import { connect } from "react-redux";

const FriendList = props => {
  return (
    <ul>
      {props.user.friends.map(value =>  <li className="friendlist">
        <div className = "hoverCont">
          <i className="fas fa-user"><span>{value}</span></i>
        </div>
      </li>)}
      
    </ul>
  );
};

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(FriendList);
