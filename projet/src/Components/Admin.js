
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import NavBar from './Admin/HeaderAdmin'
import Login from './Admin/LoginAdmin'
import Add from './Admin/Add'
import Reclamation from './Admin/reclamation'
export default class Admin extends Component {
    state = {
        connected: false,
    }
    _isConnected = () => {
        this.setState({ connected: true });
    }
    render() {
        return (
            <div>
                <Router>
                    {
                        this.state.connected ? <NavBar></NavBar> : ''
                    }

                    <Route path="/admin" render={(props) => this.state.connected ? <Home></Home> : <Login Connected={this._isConnected}  ></Login>}
                        exact
                    ></Route>
                    <Route path="/admin/add" component={Add}  ></Route>
                    <Route path="/admin/reclamation" component={Reclamation} ></Route>
                </Router>
            </div >
        );
    }
}
