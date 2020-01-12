
import React, { Component } from 'react';
import "../App.css"
import Axios from 'axios';
import { Badge } from 'reactstrap';
export default class Home extends Component {
    state = {
        data: [],
        Filiere: 0,
        Etudiant: 0
    }
    componentWillMount() {
        setInterval(() => {
            Axios.get('http://localhost:3029/admin/Publication/')
                .then((res) => {
                    this.setState({ data: res.data });
                })
            Axios.get('http://localhost:3029/admin/filiere/')
                .then(res => {
                    this.setState({ Filiere: res.data.length })
                })
            Axios.get('http://localhost:3029/admin/Etudiant/')
                .then(res => {
                    this.setState({ Etudiant: res.data.length })
                })
        }, 2000);
    }
    render() {
        return (

            <div class="row">
                <div class="leftcolumn">
                    {
                        this.state.data.map(e => (
                            <div class="card">
                                <h2>{e.Title}</h2>
                                <div><img style={{ height: "200px" }} src={e.Url}></img></div>
                                <p>{e.Body}</p>
                            </div>
                        ))
                    }
                </div>
                <div class="rightcolumn">
                    <div class="card">
                        <h3>{this.state.Etudiant}<Badge color="danger">Etudiant</Badge></h3>
                    </div>
                    <div class="card">
                        <h3>{this.state.Filiere}<Badge color="danger">Filière</Badge></h3>
                    </div>

                </div>
            </div>

        );
    }
}
