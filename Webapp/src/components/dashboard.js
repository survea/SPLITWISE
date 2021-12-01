import React from 'react';
import DashHeader from '../components/DashHeader';
import  MainDashboard  from './Dashboard/MainDashboard';
import AddExpense from './Dashboard/AddExpensePopup';
import SettleUp  from './Dashboard/settlePopup';
import { AddFriend } from '../components/Dashboard/AddFriends';
import  Friend  from './Dashboard/popups/friendPopup';
import {instance} from '../utilities/AxiosConfig';
import {userActionCreator} from "../redux/actionCreator/userAction";
import { store } from "../redux/store"

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayFriend: false, showExp: false, settleUp: false }

  }
  componentDidMount(){
    console.log("will Mount********************************************** ",localStorage.username);
    instance.post('/getData',{username: localStorage.username}).then((resp)=>{
        console.log("this is response",resp.data.user);
        var action = userActionCreator(resp.data.user,'AddUser');
        store.dispatch(action);
    })
}
displayFriend(){
  this.setState({...this.state,displayFriend: !this.state.displayFriend});
  console.log(this.state.displayFriend);
}
showExpense(){
    this.setState({...this.state,showExp: !this.state.showExp});
    console.log(this.state.showExp);
}  
settle(){
  this.setState({...this.state,settleUp: !this.state.settleUp});
  console.log(this.state.settleUp);
}

settlement(){
    this.setState({...this.state,settleUp: !this.state.settleUp});
    console.log(this.state.settleUp);
}
  render() {

    return (
      <div >
        <DashHeader />
        {this.state.displayFriend && <Friend friend={this.displayFriend.bind(this)}/>}
        {this.state.showExp && <AddExpense friend = {this.showExpense.bind(this)}/>}
        {this.state.settleUp && <SettleUp friend = {this.settle.bind(this)}/>}
        <div className="flex">
        <AddFriend friend={this.displayFriend.bind(this)} />
          <MainDashboard friend={this.showExpense.bind(this)} settlement={this.settlement.bind(this)} />
        </div>
      </div>
    )
  }
}