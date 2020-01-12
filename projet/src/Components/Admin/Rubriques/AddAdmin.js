import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Table } from 'evergreen-ui';
import axios from 'axios';
export default class AddAdmin extends Component {
    state = {

        email: '',
        password: ''
    }

    AddHandler = () => {
        const Objet = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3029/admin/add', Objet)
            .then(res => {
                alert(res.data.msg)
            })
    }
    render() {
        return (
            <div className='row'> <div className='column'>
                <Container className="App" style={{ padding: 100 }}>
                    <h2>Ajouter Administrateur</h2>
                    <Form className="form">

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
            </div>
        );
    }
}
