
import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Input, Button } from 'reactstrap';
import { Table } from 'evergreen-ui';
export default class AjouteAbsence extends Component {
  state = {
    absence: [],
    matiere: '',
    date: '',
    heure: '',
    data: [],
    etudiant: []
  }
  componentDidMount() {
    setInterval(() => {
      axios.get('http://51.91.98.162:3029/professor/absence')
        .then(res => {
          this.setState({ data: res.data })
        })
    }, 1000);
    setInterval(() => {
      axios.get('http://51.91.98.162:3029/admin/Etudiant')
        .then(res => {
          this.setState({ etudiant: res.data })
        })
    }, 1000);

  }
  AddHandler = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    const Absence = {
      matiere: 'java',
      date: date + '/' + month + '/' + year,
      heure: hours + ':' + min,
      absence: [this.state.absence]
    }
    axios.post('http://51.91.98.162:3029/admin/absence/add', Absence)
      .then(res => {
        alert(res.data.msg)
      })
  }

  render() {
    return (
      <div className='row'>
        <div className='column'>
          <Container className="App" style={{ padding: 100 }}>
            <h2>Ajouter Absence</h2>
            <Form className="form">
              <Table>
                <Table.Head>
                  <Table.TextHeaderCell>
                    Etudiant
                            </Table.TextHeaderCell>
                  <Table.TextHeaderCell>
                    Absence
                            </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                  {this.state.etudiant.map(profile => (
                    <Table.Row >
                      <input
                        type="hidden"
                        onChange={(e) => { this.setState({ absence: [profile.cne] }) }}
                      />
                      <Table.TextCell>{profile.nomComplet}</Table.TextCell>
                      <Table.TextCell><Input type="checkbox" /></Table.TextCell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <Button onClick={this.AddHandler} >Valider</Button>
            </Form>
          </Container>

        </div>
        <div className='column'>
          <h2>Liste des Absences</h2>
          <Table>
            <Table.Head>
              <Table.TextHeaderCell>
                Etudiant
                            </Table.TextHeaderCell>
              <Table.TextHeaderCell>
                Matière
                            </Table.TextHeaderCell>
              <Table.TextHeaderCell>
                Date
                            </Table.TextHeaderCell>
              <Table.TextHeaderCell>
                Heure
                            </Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={240}>
              {this.state.data.map(profile => (
                <Table.Row key={profile.cne} >
                  <Table.TextCell>{profile.cne}</Table.TextCell>
                  <Table.TextCell>{profile.matiere}</Table.TextCell>
                  <Table.TextCell>{profile.date}</Table.TextCell>
                  <Table.TextCell>{profile.heure}</Table.TextCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div> </div>
    );
  }
}
