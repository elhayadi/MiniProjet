
import React, { Component } from 'react';
import { FormGroup, Label, Col, Input, Form, Container, Button } from 'reactstrap';
import Axios from 'axios';
export default class Publication extends Component {
    state = {
        Title: "",
        Url: "",
        Body: ""
    }
    HandlEvent = () => {
        const Pub = {
            Title: this.state.Title,
            Body: this.state.Body,
            Url: this.state.Url
        }
        Axios.post('http://51.91.98.162:3029/admin/Publication/add', Pub)
            .then(res => {
                alert(res.data.msg)
            })
    }
    render() {
        return (
            <Container className="App" style={{ padding: 100 }}>
                <h2>Ajouter Publication</h2>
                <Form >

                    <Col>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input
                                onChange={(e) => { this.setState({ Title: e.target.value }) }}
                                placeholder="Title"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Image</Label>
                            <Input
                                onChange={(e) => { this.setState({ Url: e.target.value }) }}
                                placeholder="Url"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label >Body</Label><Input
                                onChange={(e) => { this.setState({ Body: e.target.value }) }}
                                placeholder="Texte ..."
                                type="textarea"
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={this.HandlEvent} >Publier</Button>
                </Form>
            </Container>

        );
    }
}
