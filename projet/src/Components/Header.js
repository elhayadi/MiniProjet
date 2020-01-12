
import React, { Component } from 'react';
import {
    Navbar, NavLink,
    NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
    render() {

        const header = (<Navbar color="light" light expand="md">
            <NavbarBrand to="/">G-ESTE</NavbarBrand>
            <NavLink  ><Link to='/student' >Student</Link></NavLink>
            <NavLink ><Link to='/professor'  >Professor</Link></NavLink>
            <NavLink ><Link to='/admin' >Admin</Link></NavLink>
        </Navbar>)
        return (
            <div>
                {this.props.type ? header : ''
                }
            </div>
        )
    }
}
