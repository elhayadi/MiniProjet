
import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Table } from 'evergreen-ui';
import axios from 'axios';
export default class AddFiliere extends Component {
    state = {
        name: '',
        data: []
    }
    componentDidMount() {
        setInterval(() => {
            axios.get('http://51.91.98.162:3029/admin/filiere/')
                .then(res => {
                    this.setState({ data: res.data })
                })
        }, 1000);
    }
    AddHandler = () => {

        const Filiere = {
            Name: this.state.name
        }
        axios.post('http://51.91.98.162:3029/admin/filiere/add', Filiere)
            .then(res => {
                alert(res.data.msg)
            })
    }
    render() {
        return (
            <div className='row'>
                <div className='column'>
                    <Container className="App" style={{ padding: 100 }}>
                        <h2>Ajouter Filere</h2>
                        <Form className="form">
                            <Col>
                                <FormGroup>
                                    <Label>Nom du Filiere</Label>
                                    <Input
                                        type="name"
                                        placeholder="Name"
                                        onChange={(e) => { this.setState({ name: e.target.value }) }}
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
                        </Table.Head>
                        <Table.Body height={240}>
                            {this.state.data.map(profile => (
                                <Table.Row key={profile.Cne} isSelectable onSelect={() => alert(profile.name)}>
                                    <Table.TextCell>{profile.Name}</Table.TextCell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div> </div>
        );
    }
}
