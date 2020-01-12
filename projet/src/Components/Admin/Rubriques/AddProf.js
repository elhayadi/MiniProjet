
import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Table } from 'evergreen-ui';
import axios from 'axios';
export default class AddProf extends Component {
    state = {
        Filiere: [],
        Matiere: [],
        data: [],
        cin: '',
        name: '',
        filiere: '',
        matiere: '',
        email: '',
        password: ''
    }
    componentDidMount() {
        setInterval(() => {
            axios.get('http://localhost:3029/admin/filiere/')
                .then(res => {
                    this.setState({ Filiere: res.data })
                })
            axios.get('http://localhost:3029/admin/matiere/')
                .then(res => {
                    this.setState({ Matiere: res.data })
                })
            axios.get('http://localhost:3029/admin/professor/')
                .then(res => {
                    this.setState({ data: res.data })
                })
        }, 1000);
    }
    AddHandler = () => {

        const Prof = {
            cin: this.state.cin,
            nomComplet: this.state.name,
            matiere: this.state.matiere,
            filiere: this.state.filiere,
            email: this.state.email,
            password: this.state.password
        }
        console.log(Prof)
        axios.post('http://localhost:3029/admin/Professor/add', Prof)
            .then(res => {
                alert(res.data.msg)
            })
    }
    render() {
        return (
            <div className='row'> <div className='column'>
                <Container className="App" style={{ padding: 100 }}>
                    <h2>Ajouter Professeur</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>CIN</Label>
                                <Input
                                    type="name"
                                    placeholder="Name"
                                    onChange={(e) => { this.setState({ cin: e.target.value }) }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Nom Complet</Label>
                                <Input
                                    type="name"
                                    placeholder="Name"
                                    onChange={(e) => { this.setState({ name: e.target.value }) }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label> Filiere</Label>
                                <Input type="select" name="select" onChange={(e) => { this.setState({ filiere: e.target.value }) }} id="exampleSelect">
                                    {this.state.Filiere.map(e => (
                                        <option key={e._id}>{e.Name}</option>
                                    )

                                    )}


                                </Input>
                            </FormGroup>
                        </Col><Col>
                            <FormGroup>
                                <Label> Matiere</Label>
                                <Input type="select" name="select" onChange={(e) => { this.setState({ matiere: e.target.value }) }} id="exampleSelect">
                                    {this.state.Matiere.map(e => (
                                        <option key={e._id}>{e.Name}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    placeholder="myemail@email.com"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label >Password</Label>
                                <Input
                                    type="password"
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                    placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                        <Button onClick={this.AddHandler} >Ajouter</Button>
                    </Form>
                </Container>
            </div>

                <div className='column' >

                    <Table>
                        <Table.Head>
                            <Table.SearchHeaderCell />
                            <Table.TextHeaderCell>
                                CIN
</Table.TextHeaderCell>
                        </Table.Head> <Table.Body height={240}>
                            {this.state.data.map(profile => (
                                <Table.Row key={profile.cin} isSelectable onSelect={() => alert(profile.name)}>
                                    <Table.TextCell>{profile.nomComplet}</Table.TextCell>
                                    <Table.TextCell>{profile.cin}</Table.TextCell>
                                </Table.Row>
                            ))}
                        </Table.Body>

                    </Table>
                </div> </div>
        );
    }
}
