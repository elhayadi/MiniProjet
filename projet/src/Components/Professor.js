

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Professor/HeaderProf';
import AjouteNotes from "./Professor/AjoutNote";
import AjoutAbsence from "./Professor/AjouteAbsence";
import Login from './Professor/LoginProfessor'
import Home from "./Home"
export default class Professor extends Component {
    state = {
        connected: false,
    }
    _isConnected = () => {
        this.setState({ connected: true });
    }
    _isDisConnected = () => {
        this.setState({ connected: false });
    }
    render() {
        return (
            <div>
                <Router>
                    {
                        this.state.connected ? <NavBar DisConnected={this._isDisConnected} ></NavBar> : ''
                    }

                    <Route path="/professor" render={(props) => this.state.connected ? <Home></Home> : <Login Connected={this._isConnected}  ></Login>}
                        exact
                    ></Route>
                    <Route path="/professor/ajoutnotes" component={AjouteNotes}  ></Route>
                    <Route path="/professor/noteabsence" component={AjoutAbsence} ></Route>
                </Router>
            </div >
        );
    }
}
