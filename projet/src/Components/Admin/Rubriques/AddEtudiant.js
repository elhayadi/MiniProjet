
import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Table } from 'evergreen-ui';
import axios from 'axios';
export default class AddEtudiant extends Component {
    state = {
        Filiere: [],
        data: [],
        cne: '',
        cin: '',
        nomComplet: '',
        filiere: '',
        email: '',
        password: ''
    }
    componentWillMount() {
        axios.get('http://localhost:5000/admin/filiere/')
            .then(res => {
                this.setState({ Filiere: res.data })
            })
        axios.get('http://localhost:5000/admin/Etudiant/')
            .then(res => {
                this.setState({ data: res.data })
            })
    }
    AddHandler = () => {
        const Objet = {
            cne: this.state.cne,
            cin: this.state.cin,
            nomComplet: this.state.nomComplet,
            filiere: this.state.filiere,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/admin/Etudiant/add', Objet)
            .then(res => {
                alert(res.data.msg)
            })
    }
    render() {
        return (
            <div className='row'> <div className='column'>
                <Container className="App" style={{ padding: 100 }}>
                    <h2>Ajouter Etudiant</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>CNE</Label>
                                <Input
                                    onChange={(e) => { this.setState({ cne: e.target.value }) }}
                                    type="name"
                                    placeholder="Name"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>CIN</Label>
                                <Input
                                    onChange={(e) => { this.setState({ cin: e.target.value }) }}
                                    type="name"
                                    placeholder="Name"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label> Nom Complet</Label>
                                <Input
                                    onChange={(e) => { this.setState({ nomComplet: e.target.value }) }}
                                    type="name"
                                    placeholder="Name"
                                />
                            </FormGroup>
                        </Col><Col>
                            <FormGroup>
                                <Label> Filiere</Label>
                                <Input onChange={(e) => { this.setState({ filiere: e.target.value }) }} type="select" name="select" id="exampleSelect">
                                    {
                                        this.state.Filiere.map(e => (
                                            <option key={e._id} >{e.Name}</option>
                                        ))
                                    }
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                    type="email"
                                    placeholder="myemail@email.com"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label >Password</Label>
                                <Input
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                    type="password"
                                    placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                        <Button onClick={this.AddHandler} >Register</Button>
                    </Form>
                </Container>
            </div>

                <div className='column' >

                    <Table>
                        <Table.Head>
                            <Table.SearchHeaderCell />
                            <Table.TextHeaderCell>
                                CNE
</Table.TextHeaderCell>
                        </Table.Head> <Table.Body height={240}>
                            {this.state.data.map(profile => (
                                <Table.Row key={profile.cne} isSelectable onSelect={() => alert(profile.name)}>
                                    <Table.TextCell>{profile.nomComplet}</Table.TextCell>
                                    <Table.TextCell>{profile.cne}</Table.TextCell>
                                </Table.Row>
                            ))}
                        </Table.Body>

                    </Table>
                </div> </div>
        );
    }
}
