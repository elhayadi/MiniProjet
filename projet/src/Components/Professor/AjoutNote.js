import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Input, Button } from 'reactstrap';
import { Table } from 'evergreen-ui';


export default class AjouteNotes extends Component {
  state = {
    cne: '',
    matiere: '',
    note1: '',
    note2: '',
    etudiant: []
  };
  componentDidMount() {
    setInterval(() => {
      axios.get('http://51.91.98.162:3029/admin/Etudiant')
        .then(res => {
          this.setState({ etudiant: res.data })
        })
    }, 1000);

  }

  AddHandler = () => {
    const Note = {
      cne: this.state.cne,
      matiere: 'java',//ajouter la matiere d prof b session!!!!
      note1: this.state.note1,
      note2: this.state.note2
    }
    axios.post('http://51.91.98.162:3029/professor/note/add', Note)
      .then(res => {
        alert(res.data.msg)
      })
  }

  render() {
    return (
      <div >
        <div class="container">
          <div class="row">

            <Container className="App" style={{ padding: 100 }}>
              <h2>Ajouter Notes</h2>
              <Form className="form">
                <Table>
                  <Table.Head>
                    <Table.TextHeaderCell>
                      Etudiant
                            </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                      Note1
                            </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                      Note2
                            </Table.TextHeaderCell>
                  </Table.Head>
                  <Table.Body height={240}>
                    {this.state.etudiant.map(profile => (
                      <Table.Row >
                        <input
                          type="hidden"
                          onChange={(e) => { this.setState({ cne: profile.cne }) }}
                        />
                        <Table.TextCell>{profile.nomComplet}</Table.TextCell>
                        <Table.TextCell><Input type="text" placeholder="Note1" onChange={(e) => { this.setState({ note1: e.target.value }) }} /></Table.TextCell>
                        <Table.TextCell><Input type="text" placeholder="Note2" onChange={(e) => { this.setState({ note2: e.target.value }) }} /></Table.TextCell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
                <Button onClick={this.AddHandler} >Enregistrer</Button>
              </Form>
            </Container>
          </div>
        </div>


      </div>
    );
  }
}
