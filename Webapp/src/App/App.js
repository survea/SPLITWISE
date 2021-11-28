import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import {Login} from '../components/login';

export  class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <Switch>  
          <Route exact path = "/login" component = {Login}></Route>
       </Switch>
      </BrowserRouter>
      
  )
  }
}
