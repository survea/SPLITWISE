import React from 'react';
import DashHeader from '../components/DashHeader';
import  MainDashboard  from './Dashboard/MainDashboard';


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

settlement(){
    this.setState({...this.state,settleUp: !this.state.settleUp});
    console.log(this.state.settleUp);
}
  render() {

    return (
      <div >
        <DashHeader />
        <div className="flex">
          <MainDashboard friend={this.showExpense.bind(this)} settlement={this.settlement.bind(this)} />
        </div>
      </div>
    )
  }
}