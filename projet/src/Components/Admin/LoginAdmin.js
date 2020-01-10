import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './Admin.css'
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
    RegisterHandler = () => {
        this.props.Connected();
        return (<Redirect to='/admin'></Redirect>)
    }

    render() {
        return (<div className="row"  >
            <div className="column" ><Container className="App" style={{ padding: 100 }}>
                <h2>Sign In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type="name"
                                placeholder="Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label >Password</Label>
                            <Input
                                type="password"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={this.RegisterHandler} >Register</Button>
                </Form>
            </Container></div>

            <div className="column"><Container className="App" style={{ padding: 100 }}>
                <h2>Log In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="myemail@email.com"
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
            </Container></div>
        </div>
        );
    }
}
