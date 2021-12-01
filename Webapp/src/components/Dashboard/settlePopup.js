import React from 'react';
import { PaidBy } from './paidByPopup';
import { PaidTo } from './paidToPopup';
import { connect } from "react-redux";
import "../../Styles/Popup.scss"
import {instance} from "../../utilities/AxiosConfig";
import { store } from '../../redux/store';
import { userActionCreator } from '../../redux/actionCreator/userAction';
 class SettleUp extends React.Component{
    constructor(props){
    super(props);
    this.val = 0;
    this.props.user.friends.push(this.props.user.username);
    this.state = {paidBy:false,paidTo:false,byValue: "you",toValue:"select"}
    }

    // state from which we are seleting the person who is going to pay
    PaidBy() {
        this.setState({paidBy: !this.state.paidBy,paidTo:false});
    }

    // state from which we are selecting the person who is going to get paid
    PaidTo() {
        this.setState({paidBy:false,paidTo: !this.state.paidTo});
    }

    // name of person who is paying
    byValue(event){
       
     if(event == this.props.user.username) event = "you"
        this.setState({...this.state,byValue: event});
    }

    // name of person who is getting paid
    toValue(event){
     if(event == this.props.user.username) event = "you";
    
         this.setState({...this.state,toValue: event});
     }

    //  submit button actions with validation
     Save(){
         if(this.state.toValue == "select"){
             alert("please select the reciver");
             return;
         }
         else if(this.val == ""){
            alert("you must enter an amount");
            return;
         }
         else if(this.state.toValue != "you" && this.state.byValue != "you"){
            alert("you cannot add an Expense that does not involve yourself");
         }
         else if(this.state.toValue == this.state.byValue){
            alert("you can't add money to yourself");
           }
       else{ 
           var sender;
            if(this.state.toValue == "you"){
                this.val = "-" + this.val;
                sender =  this.state.byValue;
            }else sender = this.state.toValue;

            console.log(parseInt(this.val),this.state.byValue,this.state.toValue);
          instance.post("/settle",{username: this.props.user.username,user: sender,val: parseInt(this.val)}).then((resp)=>{
              console.log(resp.data.doc);
              var action = userActionCreator(resp.data.doc,'AddUser');
              store.dispatch(action);
              
              this.props.friend();
          });
       } 
    }
  render(){
        return (
        <div className = "fPo">
        <div className = "flx">
        <div className = "fcontent">
        <div className = "fheader">   
        <span>Settle up</span>
        <button className = "float-right" onClick = {this.props.friend}><i className="fas fa-times"></i></button>
        </div>

        <div className = "frnd-set">
        <button onClick = {this.PaidBy.bind(this)}>{(this.state.byValue == "you")?"you":this.state.byValue.slice(0,6) + "..."}</button> paid <button onClick = {this.PaidTo.bind(this)}>{(this.state.toValue == "you" || this.state.toValue == "select")?this.state.toValue:this.state.toValue.slice(0,6) + "..."}</button>
        </div>
      
      <input className = "money" onChange = {(event)=>{
          this.val = event.target.value;
      }} placeholder = "$ 0.0" type="number" name="" id=""/>
      <div className = "pop-btn bt-mr">

        <button className = "btn Add" onClick = {this.Save.bind(this)}>Save</button>

        <button className = "btn cut" onClick = {this.props.friend}>Close</button>
    </div>
        </div>
        
        {this.state.paidBy && <PaidBy list = {this.props.user.friends} byValue = {this.byValue.bind(this)}/>}
        {this.state.paidTo && <PaidTo list = {this.props.user.friends}  toValue = {this.toValue.bind(this)}/>}

        </div>

    </div>
    )}
}
const mapStateToProps = state => {
    console.log("state is  ", state);
    return {
      user: state.user
    };
  };
  
  const fn = connect(mapStateToProps);
  export default fn(SettleUp);