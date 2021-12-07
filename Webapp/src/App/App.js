import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import LoginContainer from '../containers/LoginContainer';
import { Dashboard } from '../components/Dashboard/DashboardComponent/Dashboard';
import SignUp from '../components/SignupComponent/Signup';
import { Landing } from '../components/LandingComponent/Landing';
import AuthComp from '../containers/AuthComp';
import AboutInfo from '../components/LandingComponent/AboutInfo';
import FAQ from '../components/LandingComponent/FAQ';
import Team from '../components/LandingComponent/Team';

import Confirm from '../components/SignupComponent/Confirm';
export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/aboutus" component={AboutInfo}></Route>
          <Route exact path="/faq" component={FAQ}></Route>
          <Route exact path="/team" component={Team}></Route>
          <Route exact path='/confirm/:id' component={Confirm} />
          <AuthComp>
            <Route exact path="/dashboard" component={Dashboard}></Route>
          </AuthComp>
        </Switch>
      </BrowserRouter>

    )
  }
}