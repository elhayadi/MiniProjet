import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
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
        return (<Redirect to='/admin'></Redirect>)
    }

    render() {
        return (
            <Container className="App" style={{ paddingTop: 100, paddingLeft: 300, paddingRight: 300 }}>
                <h2>Log In</h2>
                <Form className="form">
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
