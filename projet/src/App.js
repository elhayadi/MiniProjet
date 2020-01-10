import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Header';
import Home from './Components/Home';
import Admin from './Components/Admin';
import Student from './Components/Student';
import Professor from './Components/Professor';
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends Component {
  state = {
    Visible: true
  }

  _Visibility = () => {
    this.setState({ Visible: false });
  }
  render() {
    return (
      <Router>
        <NavBar type={this.state.Visible} _Visibility={this._Visibility}></NavBar>
        <Route path="/" component={Home} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/student" component={Student} exact />
        <Route path="/professor" component={Professor} exact />
      </Router>

    )
  }
}



