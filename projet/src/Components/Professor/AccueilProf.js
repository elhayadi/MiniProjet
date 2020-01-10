import React ,{Component} from 'react';
 
export default class AccueilProf  extends Component {
  render() {
    return (
        <div style={{marginLeft: "20%" , marginRight:"20%"  }}>
               <div class="tab-content ml-1" id="myTabContent">
         <div class="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                        <div class="row">
                        <div class="col-sm-3 col-md-2 col-5">
                            <label  style={{color: " #A0522D" , fontWeight:"bold"}} >CIN</label>
                        </div>
                        <div class="col-md-8 col-6">
                        JK85785
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3 col-md-2 col-5">
                            <label   style={{color: " #A0522D" , fontWeight:"bold"}}>Nom Complet</label>
                        </div>
                        <div class="col-md-8 col-6">
                            Sabour Abderrahim.
                        </div>
                    </div>
                    <hr />
                    
                    
                    <div class="row">
                        <div class="col-sm-3 col-md-2 col-5">
                            <label   style={{color: " #A0522D" , fontWeight:"bold"}}>Matiere</label>
                        </div>
                        <div class="col-md-8 col-6">
                            Algorithmique
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3 col-md-2 col-5">
                            <label   style={{color: " #A0522D" , fontWeight:"bold"}}>Email</label>
                        </div>
                        <div class="col-md-8 col-6">
                            abdo.sabour@gmail.com
                        </div>
                    </div>
                </div>
                </div>
                </div>
                );
          }
        }
 