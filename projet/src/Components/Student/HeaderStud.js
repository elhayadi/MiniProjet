import React, { Component } from 'react';

import Logo from "./2018.PNG";
import {
    Navbar,
    Nav,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    Disconnect = () => {
        this.props.DisConnected()
        window.location = "/student";
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <img src={Logo} style={{ width: "10%", height: "10%" }} />
                    <NavLink><Link to="/student/" >Accueil </Link> </NavLink>
                    <NavLink ><Link to="/student/notes" >Notes </Link></NavLink>
                    <NavLink ><Link to="/student/absence" >Absence </Link></NavLink>
                </Nav>
                <button type="submit" onClick={this.Disconnect} class="btn btn-primary" style={{ marginLeft: "80%", backgroundColor: "#4682B4", width: "10%", height: "10%" }}>Déconnection</button>

            </Navbar>
        );
    }
}
