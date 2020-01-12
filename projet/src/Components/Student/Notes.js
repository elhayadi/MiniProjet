import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Input, Button } from 'reactstrap';
import { Table } from 'evergreen-ui';

export default class Notes extends Component {
  state = {
    cne: '',
    reclamation: '',
    note: []
  }
  componentDidMount() {
    setInterval(() => {
      axios.get('http://51.91.98.162:3029/etudiant/note')
        .then(res => {
          this.setState({ note: res.data })
        })
    }, 1000);
  }
  AddHandler = () => {
    const Reclamation = {
      cne: '1654897', //with session
      reclamation: this.state.reclamation
    }
    axios.post('http://51.91.98.162:3029/etudiant/reclamation/add', Reclamation)
      .then(res => {
        alert(res.data.msg)
      })
  }

  render() {
    return (
      <div className='row'>
        <div className='column'>
          <Container className="App" style={{ padding: 100 }}>
            <h2>Liste Des Notes</h2>
            <Table>
              <Table.Head>
                <Table.TextHeaderCell>
                  Matière
                            </Table.TextHeaderCell>
                <Table.TextHeaderCell>
                  Note1
                            </Table.TextHeaderCell>
                <Table.TextHeaderCell>
                  Note2
                            </Table.TextHeaderCell>
              </Table.Head>
              <Table.Body height={240}>
                {this.state.note.map(profile => (
                  <Table.Row key={profile.cne}>
                    <Table.TextCell>{profile.matiere}</Table.TextCell>
                    <Table.TextCell>{profile.note1}</Table.TextCell>
                    <Table.TextCell>{profile.note2}</Table.TextCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Container>

        </div>
        <div className='column'>
          <h2>Vous avez une réclamation ? </h2>
          <Form >
            <div class="form-group">
              <Input type="text" class="form-control" onChange={(e) => { this.setState({ reclamation: e.target.value }) }} aria-describedby="emailHelp" on placeholder=" Votre Réclamation" />
            </div>
            <Button type="submit" onClick={this.AddHandler} >Envoyer</Button>
          </Form>
        </div>

      </div>
    );
  }
}
