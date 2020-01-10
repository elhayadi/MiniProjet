import React ,{Component} from 'react';
 
export default class Notes  extends Component {
  render() {
  return (
    <div style={{marginLeft: "20%" , marginRight:"20%" }}>
       <div>
        <table class="table table-dark">
  <thead>

    <tr>
      <th scope="col"  style={{color:"#4682B4"}}>Matière</th>
      <th scope="col"  style={{color:"#4682B4"}}>Note1</th>
      <th scope="col"  style={{color:"#4682B4"}}>Note2</th>
      <th scope="col"  style={{color:"#4682B4"}}>Note Générale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>

  </tbody>
</table>
        </div>
        <div>
        <form method>
  <div class="form-group">
    <label for="exampleInputEmail1" style={{color:"#4682B4"}}>Vous avez une réclamation ? </label>
    <textarea type="text" class="form-control"  aria-describedby="emailHelp" on placeholder=" Votre Réclamation"/>
   </div>
  <button type="submit" class="btn btn-primary"  style={{marginLeft:"80%" , backgroundColor:"#4682B4"}}>Submit</button>
</form>
        </div>
        
            </div>
            );
          }
        }
 