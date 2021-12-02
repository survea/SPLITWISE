import React from "react";
import "../../../styles/frndPop.scss";
import { connect } from "react-redux";
const Friend = props => {
  var takeInp = { defaultUser: "" };
  return (
    <div className="friendPopup">
      
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(Friend);
