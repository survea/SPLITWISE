import React from "react";
import { connect } from "react-redux";
import "../Styles/Dashboard.scss";
import personProfile from '../../../images/person-profile.png';
import { NavLink } from 'react-router-dom';
var expense = 0;
var balOwe = 0;
var balOwed = 0;
var balanceOwe = [];
var balanceOwed = [];
function calculate(props){
   expense = 0;
   balOwe = 0;
   balOwed = 0;
   balanceOwe = [];
   balanceOwed = [];
   if(props.user.expensis){
   props.user.expensis.forEach(element => {
if(element.data){
  expense += parseInt(element.data.ammount);
      if(element.data.ammount>0){
        balOwed += parseInt(element.data.ammount);
        balanceOwed.push(element);
      }else if(element.data.ammount<0){
        balOwe += parseInt(element.data.ammount);
        balanceOwe.push(element);
      }
    }
   });
  }
}

 const MainDashboard = props => {
  return (
    <div id ="" className="main">
      {calculate(props)}
      <div className="mainDash">
        <div className="DashHeader">
        <NavLink to="/dashboard"><h3>Dashboard</h3></NavLink>
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
            <p className="green">$ {expense.toString().replace("-","")}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you owe</label>
            <p style = {{color:"red"}}>$ {balOwe.toString().replace("-","")}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you are owed</label>
            <p className="green">$ {balOwed.toString().replace("-","")}</p>
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
      <div className = "flex">
        <div className="float-left ml-3 borders">
          <ul>
            {(balanceOwe.length == 0)?<li>You do not owe anything</li>:balanceOwe.map(value=>
             <li>
               <img className="imgs" src={personProfile} alt="" align="left"/>
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
          {(balanceOwed.length == 0)?<li>You are not owed</li>:balanceOwed.map(value=>
            <li>
            <img className="imgs" src={personProfile} alt="" align="left"/>
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
