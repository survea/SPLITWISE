import React from 'react';
import DashHeader from '../DashboardHeaderComponent/DashHeader';
import MainDashboard from '../MainDashboardComponent/MainDashboard';
import AddExpense from '../popups/AddExpensePopup';
import SettleUp from '../popups/settlePopup';
import { AddFriend } from '../FriendsComponent/AddFriends';
import Friend from '../popups/friendPopup';
import ExpenseTable from '../ExpenseHistoryComponent/ExpenseTable';
import "../Styles/Dashboard.scss";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayFriend: false, showExp: false, settleUp: false, showProfile: false, userRequested: '' }

  }
  componentDidMount() {
    console.log("will Mount********************************************** ", localStorage.username);
    // instance.post('/getData',{username: localStorage.username}).then((resp)=>{
    //     console.log("this is response",resp.data.user);
    //     var action = userActionCreator(resp.data.user,'AddUser');
    //     store.dispatch(action);
    // })
  }
  // function to display add friend popup
  displayFriend() {
    this.setState({ ...this.state, displayFriend: !this.state.displayFriend });
    console.log(this.state.displayFriend);
  }
  // function to display show expense popup
  showExpense() {
    this.setState({ ...this.state, showExp: !this.state.showExp });
    console.log(this.state.showExp);
  }
  // function to display settle up popup
  settle() {
    this.setState({ ...this.state, settleUp: !this.state.settleUp });
    console.log(this.state.settleUp);
  }
  // function to display settlements
  settlement(userName) {
    this.setState({ ...this.state, settleUp: !this.state.settleUp });
    console.log(this.state.settleUp);
  }
  // function to display update profile popup
  profile() {
    this.setState({ ...this.state, showProfile: !this.state.showProfile });
    console.log(this.state.showProfile);
  }
  // function to display expense and settlement history
  checkExpenseHistory(userName) {
    this.setState({ ...this.state, userRequested: userName });
  }
  render() {

    return (
      <div >
        <DashHeader friend={this.profile.bind(this)} />
        {this.state.displayFriend && <Friend friend={this.displayFriend.bind(this)} />}
        {this.state.showExp && <AddExpense friend={this.showExpense.bind(this)} />}
        {this.state.settleUp && <SettleUp friend={this.settle.bind(this)} />}
        <div className="flex background-img ">
          <AddFriend friend={this.displayFriend.bind(this)} />
          <MainDashboard friend={this.showExpense.bind(this)} settlement={this.settlement.bind(this)} checkExpenseHistory={this.checkExpenseHistory.bind(this)} />
          <ExpenseTable expenseTable={this.state.userRequested} checkExpenseHistory={this.checkExpenseHistory.bind(this)} />
        </div>
      </div>
    )
  }
}