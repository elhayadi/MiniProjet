import React, { Component } from 'react';

import Logo from "./2018.PNG";
import { Button } from "evergreen-ui"
import {
    Navbar,
    Nav,
    NavLink, Collapse,
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    Disconnect = () => {
        this.props.DisConnected()
        window.location = "/student";
    }
    render() {
        return (
            <Navbar color="light" light expand="md">


                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <img src={Logo} style={{ width: "10%", height: "10%" }} />
                        <NavLink><Link to="/student/" >Accueil </Link> </NavLink>
                        <NavLink ><Link to="/student/notes" >Notes </Link></NavLink>
                        <NavLink ><Link to="/student/absence" >Absence </Link></NavLink>
                    </Nav> <Button marginRight={12} onClick={this.Disconnect} iconBefore="arrow-left">Déconnexion</Button></Collapse>
            </Navbar>
        );
    }
}
