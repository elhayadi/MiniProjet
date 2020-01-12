
import React, { Component } from 'react';
import NavBar from './Student/HeaderStud'
import Home from './Home';
import Notes from './Student/Notes';
import Absence from './Student/Absence';
import Login from './Student/LoginStudent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
export default class Student extends Component {
    state = {
        connected: false,
    }
    _isConnected = () => {
        this.setState({ connected: true });
    }
    _isDisConnected = () => {
        this.setState({ connected: false });
    }
    Hide = () => {
        this.props.Activate()
    }
    render() {
        return (
            <div>
                <Router>
                    {
                        this.state.connected ? <NavBar DisConnected={this._isDisConnected} ></NavBar> : ''
                    }

                    <Route path="/student" render={(props) => this.state.connected ? <Home></Home> : <Login Hide={this.Hide} Connected={this._isConnected}  ></Login>}
                        exact
                    ></Route>
                    <Route path="/student/notes" component={Notes}  ></Route>
                    <Route path="/student/absence" component={Absence} ></Route>
                </Router>
            </div >
        );
    }
}
