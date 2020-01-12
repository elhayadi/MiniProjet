
import React, { Component } from 'react';
import { Button } from 'evergreen-ui'
import {
    Navbar, NavLink, Nav, Collapse
} from 'reactstrap';
import Logo from "./2018.PNG";
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    Deconnexion = () => {
        this.props.DisConnected();
        window.location = "/professor"
    }
    render() {
        return (<Navbar color="light" light expand="md">

            <Collapse navbar>
                <Nav className="mr-auto" navbar>

                    <img src={Logo} style={{ width: "4%", height: "4%" }} />
                    <NavLink  ><Link to="/professor" >Accueil </Link> </NavLink>
                    <NavLink  ><Link to="/professor/ajoutnotes" >Ajouter Note  </Link></NavLink>
                    <NavLink  ><Link to="/professor/noteabsence" >Marquer Absence </Link></NavLink>
                </Nav><Button marginRight={12} onClick={this.Deconnexion} iconBefore="arrow-left">Déconnexion</Button></Collapse>

        </Navbar>

        );
    }
}
