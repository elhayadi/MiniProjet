import React, { Component } from 'react';

export default class AjoutAbsence extends Component {
  state = {
    selectEtudiant: '',
    selectMatiere: '',
    date: '',
    heure: ''
  };
  handleOnChangeDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  handleOnChangeHeure = e => {
    this.setState({
      heure: e.target.value
    });
  };
  handleOnChangeEtudiant = e => {
    this.setState({
      selectEtudiant: e.target.value
    });
  };
  handleOnChangeMatiere = e => {
    this.setState({
      selectMatiere: e.target.value
    });
  };
  onSubmit = async e => {

    e.preventDefault();
    const data = {
      selectEtudiant: this.state.selectEtudiant,
      selectMatiere: this.state.selectMatiere,
      date: this.state.date,
      heure: this.state.heure
    }
  };
  render() {
    return (
      <div >
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div>
                <table class="table table-light">
                  <thead>

                    <tr>
                      <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>Etudiant</th>
                      <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>Date</th>
                      <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>Heure</th>
                      <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>matiere</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>



            <div class="col-sm">
              <div>
                <form onSubmit={this.onSubmit}>
                  <div class="form-group">

                    <table class="table table-dark table-striped">
                      <thead>

                        <tr>
                          <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>Etudiant</th>
                          <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>Absence</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mark</td>
                          <td>
                            <input type="checkbox" />

                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                  <button type="submit" class="btn btn-primary" style={{ marginLeft: "80%", backgroundColor: " #A0522D", borderColor: "white" }}>Ajouter</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
