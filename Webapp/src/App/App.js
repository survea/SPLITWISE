import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import LoginContainer from '../containers/login';
import { Dashboard } from '../components/dashboard';
import SignUp from '../components/signup';
import { Landing } from '../components/landing';
import AuthComp from '../containers/AuthComp';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path="/" component={Landing}></Route>
          <AuthComp>
            <Route exact path="/dashboard" component={Dashboard}></Route>
          </AuthComp>
          <Route exact path="/signup" component={SignUp}></Route>
        </Switch>
      </BrowserRouter>

    )
  }
}
