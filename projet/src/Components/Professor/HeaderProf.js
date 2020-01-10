
import React, { Component } from 'react';
import {
    Navbar, NavLink, Nav,
    NavbarBrand
} from 'reactstrap';
import Logo from "./2018.PNG";
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    Deconnexion = () => {
        window.location = "/professor"
    }
    render() {
        return (<Navbar bg="dark" variant="dark" >

            <Nav  >

                <img src={Logo} style={{ width: "4%", height: "4%" }} />
                <NavLink  ><Link to="/professor" >Accueil </Link> </NavLink>
                <NavLink  ><Link to="/professor/ajoutnotes" >Ajouter Note  </Link></NavLink>
                <NavLink  ><Link to="/professor/noteabsence" >Marquer Absence </Link></NavLink>
                <p style={{ marginLeft: "30%", color: "#A0522D", fontWeight: "bold", fontFamily: "Copperplate Gothic Bold" }}>Espace Professeur</p>
            </Nav>
            <button type="submit" onClick={this.Deconnexion} class="btn btn-primary" style={{ marginLeft: "80%", color: "#D2B48C", borderColor: "white", backgroundColor: "white", fontWeight: "bold", fontFamily: "Footlight MT Light" }}>Déconnection</button>

        </Navbar>

        );
    }
}
