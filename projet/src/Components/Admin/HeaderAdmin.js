import React, { Component } from 'react';
import {
    Navbar, NavLink,
    NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    render() {
        return (<Navbar color="light" light expand="md">
            <NavbarBrand ><Link to="/admin">admin</Link></NavbarBrand>
            <NavLink ><Link to='/admin/add' >Ajouter</Link></NavLink>
            <NavLink ><Link to='/admin/reclamation' >Reclamation</Link></NavLink>
        </Navbar>
        );
    }
}
