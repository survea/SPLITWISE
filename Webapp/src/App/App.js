import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import LoginContainer from '../containers/LoginContainer';
import { Dashboard } from '../components/Dashboard/DashboardComponent/Dashboard';
import SignUp from '../components/SignupComponent/Signup';
import { Landing } from '../components/LandingComponent/Landing';
import AuthComp from '../containers/AuthComp';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <AuthComp>
            <Route exact path="/dashboard" component={Dashboard}></Route>
          </AuthComp>
        </Switch>
      </BrowserRouter>

    )
  }
}
