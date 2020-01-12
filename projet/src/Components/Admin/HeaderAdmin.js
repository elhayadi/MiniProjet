import React, { Component } from 'react';
import { Button } from 'evergreen-ui';
import {
    Navbar, Nav, NavLink,
    NavbarBrand, NavbarText, Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    Disconnect = () => {
        this.props.DisConnected()
        window.location = "/admin";
    }
    render() {
        return (<Navbar color="light" light expand="md">
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavbarBrand ><Link to="/admin">admin</Link></NavbarBrand>
                    <NavLink ><Link to='/admin/add' >Ajouter</Link></NavLink>
                    <NavLink ><Link to='/admin/publication' >Publier</Link></NavLink>
                    <NavLink ><Link to='/admin/reclamation' >Reclamation</Link></NavLink>
                </Nav><Button marginRight={12} onClick={this.Disconnect} iconBefore="arrow-left">Déconnexion</Button></Collapse>
        </Navbar>
        );
    }
}
