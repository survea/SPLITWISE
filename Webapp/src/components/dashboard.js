import React from 'react';
import DashHeader from '../components/DashHeader';
import  MainDashboard  from './Dashboard/MainDashboard';
import AddExpense from './Dashboard/AddExpensePopup';
import SettleUp  from './Dashboard/settlePopup';
export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showFriend: false, showExp: false, settleUp: false }

  }
  componentDidMount(){
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
        {this.state.showExp && <AddExpense friend = {this.showExpense.bind(this)}/>}
        {this.state.settleUp && <SettleUp friend = {this.settle.bind(this)}/>}
        <div className="flex">
          <MainDashboard friend={this.showExpense.bind(this)} settlement={this.settlement.bind(this)} />
        </div>
      </div>
    )
  }
}