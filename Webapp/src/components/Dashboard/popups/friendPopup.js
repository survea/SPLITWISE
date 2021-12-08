import React from "react";
import "./frndPop.scss";
import { instance } from "../../../utilities/AxiosConfig";
import { userActionCreator } from "../../../redux/actionCreator/userAction";
import { store } from "../../../redux/store";
import { connect } from "react-redux";

var userInput = { defaultUser: "" };
// function to add friend
let addFriend = (props) => {
  userInput.defaultUser = props.user.username;
            
  if(userInput.username == props.user.username){
     alert("you can't add yourself as your Friend");
     return;
  } else if(props.user.friends.includes(userInput.username)) {
    alert("Friend already added");
     return;
  }
  instance
    .post("/dashboard/addFriend", userInput)
    .then(resp => {
      if (resp.data.doc) {
        var action = userActionCreator(resp.data.doc, "AddUser");
        store.dispatch(action);
      } else if(resp.data.Status == 'F') {
        alert(resp.data.msg);
        console.log("user not found");
      }
    })
    .catch(err => {
      console.log(err);
    });
};
// display friends popup
const Friend = props => {
  return (
    <div className="friendPopup">
      <div className="frnd-content">
        <div className="frnd-header">
          <span>Add new Friend</span>
          <button className="float-right" onClick={props.friend}>
            <i className="fas fa-times" />
          </button>
        </div>

        <input
          id="username"
          onChange={event => {
            userInput[event.target.id] = event.target.value;
          }}
          placeholder="Enter username"
          className="frnd-name"
          type="text"
        />

        <div className="pop-btn">
          <button
            className="btn Add"
            onClick={() => { addFriend(props);}}
          >
            Add Friend
          </button>

          <button className="btn cut" onClick={props.friend}>
            Close
          </button>
        </div>
      </div>
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
