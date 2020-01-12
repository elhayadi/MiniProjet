import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Alert
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
export default class Login extends Component {
    state = {
        Username: '',
        Password: '',
        Name: ''
    }
    LoginHandler = () => {
        this.props.Connected();
        this.props.Hide();
        return (<Redirect to='/admin'></Redirect>)
    }

    render() {
        return (
            <Container style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 300, paddingRight: 300, }}>

                <Alert color="dark"><center><h2>Espace Etudiant</h2></center></Alert>
                <Form className="card">
                    <Col>
                        <FormGroup>
                            <Label>CNE</Label>
                            <Input
                                type="CNE"
                                placeholder="#0000000000"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label >Password</Label>
                            <Input
                                type="password"
                                placeholder="********"
                                onChange
                            />
                        </FormGroup>
                    </Col>

                    <Button onClick={this.LoginHandler} >Login</Button>
                </Form>
            </Container>
        );
    }
}
