import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
export default class AjouteNotes extends Component {
  state = {
    etudiant: '',
    note: ''
  };
  handleOnChangeEtudiant = e => {
    this.setState({
      etudiant: e.target.value
    });
  };
  handleOnChangeNote = e => {
    this.setState({
      note: e.target.value
    });
  };

  render() {
    return (
      <div >
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div>
                <table class="table table-light table-striped">
                  <thead>

                    <tr>
                      <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>Etudiant</th>
                      <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>Note1</th>
                      <th scope="col" style={{ color: " #A0522D", fontFamily: "Castellar" }}>Note2</th>
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
                <form method>
                  <div class="form-group">
                    <label style={{ color: " #A0522D", fontFamily: "Castellar" }}>Etudiant</label><br />
                    <select value={this.state.etudiant} onChange={this.handleOnChangeEtudiant} class="form-control inputstl" id="expertise">
                      <option value="" disabled selected>Choose your option</option>
                      <option value="1">Option 1</option>
                    </select> <br /><label style={{ color: " #A0522D", fontFamily: "Castellar" }}> Ajouter Note</label>
                    <input type="text" class="form-control" value={this.state.note} onChange={this.handleOnChangeNote} on placeholder="Ajouter Note" />
                  </div>
                  <button type="submit" class="btn btn-primary" style={{ marginLeft: "80%", backgroundColor: "#A0522D", borderColor: "white" }}>Ajouter</button>
                </form>
              </div>
            </div>

          </div>
        </div>


      </div>
    );
  }
}
