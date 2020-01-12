import React, { Component } from 'react';
import './App.css';
import StartPage from './Components/StartPage';
import Footer from './Components/Standard/Footer'
import Header from './Components/Standard/Header'

import Admin from './Components/Admin';
import Student from './Components/Student';
import Professor from './Components/Professor';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
export default class App extends Component {
  state = {
    connected: false,
    Visible: true
  }


  Disactivate = () => {
    this.setState({ Visible: false });
  }
  _isConnected = () => {
    this.setState({ connected: true });
  }
  render() {
    return (<div class="body" >

      <Header></Header>
      <Router  >
        {
          this.state.Visible ? (<Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
          </Breadcrumb>) : ''
        }


        <Route path="/" render={(props) => <StartPage Disactivate={this.Disactivate}></StartPage>} exact />
        <Route path="/admin" render={(props) => <Admin Activate={this.Disactivate} ></Admin>} exact />
        <Route path="/student" render={(props) => <Student Activate={this.Disactivate}  ></Student>} exact />
        <Route path="/professor" render={(props) => <Professor Activate={this.Disactivate}  ></Professor>} exact />
      </Router>

    </div>
    )
  }
}



