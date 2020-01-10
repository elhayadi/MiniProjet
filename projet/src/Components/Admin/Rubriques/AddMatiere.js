
import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Table } from 'evergreen-ui';
import axios from 'axios';
export default class AddMatiere extends Component {
    state = {
        Filiere: [],
        name: '',
        option: '',
        data: []
    }
    componentDidMount() {
        setInterval(() => {
            axios.get('http://localhost:5000/admin/filiere/')
                .then(res => {
                    this.setState({ Filiere: res.data })
                })
            axios.get('http://localhost:5000/admin/matiere/')
                .then(res => {
                    this.setState({ data: res.data })
                })
        }, 1000);
    }
    AddHandler = () => {
        const Matiere = {
            Name: this.state.name,
            Filiere: this.state.option
        }
        axios.post('http://localhost:5000/admin/matiere/add', Matiere)
            .then(res => {
                alert(res.data.msg)
            })
    }
    render() {
        return (
            <div className='row'>
                <div className='column'>
                    <Container className="App" style={{ padding: 100 }}>
                        <h2>Ajouter Matière</h2>
                        <Form className="form">
                            <Col>
                                <FormGroup>
                                    <Label>Nom du Matiere</Label>
                                    <Input
                                        type="name"
                                        onChange={(e) => { this.setState({ name: e.target.value }) }}
                                        placeholder="Name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label> Filiere</Label>
                                    <Input type="select" onChange={e => { this.setState({ option: e.target.value }) }} name="select" id="exampleSelect">
                                        {
                                            this.state.Filiere.map((e) => (
                                                <option key='e._id' >{e.Name}</option>
                                            ))
                                        }
                                    </Input>
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
                                Filiere
                            </Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body height={240}>
                            {this.state.data.map(profile => (
                                <Table.Row key={profile.Name} isSelectable onSelect={() => alert(profile.name)}>
                                    <Table.TextCell>{profile.Name}</Table.TextCell>
                                    <Table.TextCell>{profile.Filiere}</Table.TextCell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div> </div>
        );
    }
}
