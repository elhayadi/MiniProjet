
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import NavBar from './Admin/HeaderAdmin'
import Login from './Admin/LoginAdmin'
import Add from './Admin/Add'
import Reclamation from './Admin/reclamation'
import Publication from './Admin/publication'
export default class Admin extends Component {

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
        this.props.Activate();
    }
    render() {
        return (
            <div>
                <Router>
                    {
                        this.state.connected ? <NavBar DisConnected={this._isDisConnected} ></NavBar> : ''
                    }

                    <Route path="/admin" render={(props) => this.state.connected ? <Home></Home> : <Login Hide={this.Hide} Connected={this._isConnected}  ></Login>}
                        exact
                    ></Route>
                    <Route path="/admin/add" component={Add}  ></Route>
                    <Route path="/admin/publication" component={Publication} ></Route>
                    <Route path="/admin/reclamation" component={Reclamation} ></Route>
                </Router>
            </div >
        );
    }
}
