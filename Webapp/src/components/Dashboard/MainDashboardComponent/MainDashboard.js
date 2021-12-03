import React from "react";
import { connect } from "react-redux";
import "../Styles/Dashboard.scss";
var expense = 0;
var balanceOwe = [];
var balanceOwed = [];

const MainDashboard = props => {
  return (
    <div id ="" className="main">
      <div className="mainDash">
        <div className="DashHeader">
          <h3>Dashboard</h3>
          <button className="btn float-right settlement" onClick={props.settlement}>
            Settle up
          </button>
          <button className="btn float-right expense" onClick={props.friend}>
            Add an expense
          </button>
        </div>

        <div className="total">
          <div className="fitting">
            <label htmlFor="">total balance</label>
            <p className="green">$ {expense}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you owe</label>
            <p style={{ color: "red" }}>$ {(expense < 0) ? expense : 0}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you are owed</label>
            <p className="green">$ {(expense > 0) ? expense : 0}</p>
          </div>
        </div>
      </div>

      <div className="entireExpense">
        <div>
          <label htmlFor="">YOU OWE</label>
        </div>
        <div>
          <label htmlFor="" className="float-right mr-4">
            YOU ARE OWED
          </label>
        </div>
      </div>
      <div className="flex">
        <div className="float-left ml-3 borders">
          <ul>
            {(balanceOwe.length == 0) ? <li>You do not owe anything</li> : balanceOwe.map(value =>
              <li>
                {/* <img
                  className="imgs"
                  src={require("../../images/person-profile.png")}
                  alt="" align="left"
                /> */}
                <div className="inline-style">
                  <h5>{value.name}</h5>
                  <span>you owe ${-(value.data.ammount)}</span>
                </div>
              </li>
            )}
          </ul>
        </div>



        <div>
          <ul>
            {(balanceOwed.length == 0) ? <li>You do not owe anything</li> : balanceOwed.map(value =>
              <li>
                {/* <img
                  className="imgs"
                  src={require("../../images/person-profile.png")}
                  alt=""
                  align="left"
                /> */}
                <div className="inline-style">
                  <h5>{value.name}</h5>
                  <span>owes you ${value.data.ammount}</span>
                </div>
              </li>
            )}
          </ul>
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
export default fn(MainDashboard);
