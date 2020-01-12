import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Alert
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../../App.css'
export default class Login extends Component {
    state = {
        Username: '',
        Password: ''
    }

    LoginHandler = () => {
        let User = {
            email: this.state.Username,
            password: this.state.Password
        }
        console.log(User);
        axios.post('http://51.91.98.162:3029/professor/Login', User)
            .then(res => {
                if (res.data.Login == true) {
                    this.props.Hide();
                    this.props.Connected();

                    let link = res.data.id;
                    return (<Redirect to={'/professor/'}></Redirect>)
                } else {
                    alert("Wrong Password")
                }
            })

    }

    render() {
        return (
            <Container style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 300, paddingRight: 300, }}>

                <Alert color="dark"><center><h2>Espace Professeur</h2></center></Alert><h2>Log In</h2>
                <Form className="card">
                    <Col>
                        <FormGroup>
                            <Label>CNE</Label>
                            <Input
                                type="email"
                                placeholder="myemail@exemple.com"
                                onChange={(e) => this.setState({ Username: e.target.value })}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label >Password</Label>
                            <Input
                                type="password"
                                placeholder="********"
                                onChange={(e) => this.setState({ Password: e.target.value })}
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={this.LoginHandler} >Login</Button>
                </Form>
            </Container>
        );
    }
}
