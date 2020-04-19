import React, { Component } from 'react';
import doonlogo from '../doonlogo.png';
const axios = require('axios');



export default class CreateUser extends Component {
    constructor(props) {
        super(props);
    
        this.onChangenameOfTheStudent = this.onChangenameOfTheStudent.bind(this);
        this.onChangedateOfBirth =this.onChangedateOfBirth.bind(this);
        this.onChangegender =this.onChangegender.bind(this);
        this.onChangeclassAd =this.onChangeclassAd.bind(this);
        this.onChangefatherName =this.onChangefatherName.bind(this);
        this.onChangemotherName =this.onChangemotherName.bind(this);
        this.onChangeoccupation =this.onChangeoccupation.bind(this);
        this.onChangepermanentAddress =this.onChangepermanentAddress.bind(this);
        this.onChangephone =this.onChangephone.bind(this);
        this.onChangewhatsAppNumber =this.onChangewhatsAppNumber.bind(this);
        this.onChangeemail =this.onChangeemail.bind(this);
        this.onChangecategory =this.onChangecategory.bind(this);
        this.onChangetransport=this.onChangetransport.bind(this);
        this.onChangedeclarationCheck=this.onChangedeclarationCheck.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        
        this.state={
          nameOfTheStudent: '',
            dateOfBirth: new Date(),
            gender: 'Boy',
            classAd: 'Play Group',
            fatherName: '',
            motherName: '',
            occupation: '',
            permanentAddress: '',
            phone: 0,
            whatsAppNumber:0,
            email: '',
            category:'General',
            transport: 'Yes',
            declarationCheck:false
        }
    }
     
    
    onChangenameOfTheStudent(e) {
        this.setState({
          nameOfTheStudent: e.target.value
        })
      }
    onChangedateOfBirth(e) {
        this.setState({
          dateOfBirth: e.target.value
        })
      }
    onChangegender(e) {
        this.setState({
          gender: e.target.value
        })
      }
    onChangeclassAd(e) {
        this.setState({
          classAd: e.target.value
        })
      }
    onChangefatherName(e) {
        this.setState({
          fatherName: e.target.value
        })
      }
    onChangemotherName(e) {
        this.setState({
          motherName: e.target.value
        })
      }
    onChangeoccupation(e) {
        this.setState({
          occupation: e.target.value
        })
      }
    onChangepermanentAddress(e) {
        this.setState({
          permanentAddress: e.target.value
        })
      }
    onChangephone(e) {
        this.setState({
          phone: e.target.value
        })
      }
    onChangewhatsAppNumber(e) {
        this.setState({
         whatsAppNumber: e.target.value
        })
      }
    onChangeemail(e) {
        this.setState({
          email: e.target.value
        })
      }
    onChangecategory(e) {
        this.setState({
          category: e.target.value
        })
      }
    onChangetransport(e) {
        this.setState({
          transport: e.target.value
        })
      }
    onChangedeclarationCheck(e){
      this.setState({
        declarationCheck:e.target.checked
      })
    }
   
    onSubmit(e){
            e.preventDefault();
            const user={
              
                nameOfTheStudent: this.state.nameOfTheStudent,
                dateOfBirth: this.state.dateOfBirth,
                gender: this.state.gender,
                classAd: this.state.classAd,
                fatherName: this.state.fatherName,
                motherName: this.state.motherName,
                occupation: this.state.occupation,
                permanentAddress: this.state.permanentAddress,
                phone: this.state.phone,
                whatsAppNumber: this.state.whatsAppNumber,
                email:this.state.email,
                category: this.state.category,
                transport:this.state.transport,
                declarationCheck:this.state.declarationCheck
              }
              console.log(user);
              
              
              axios.post('/users/add', user)
              .then((res) => {
                  console.log(res.data);
                  alert('Registration of data is successful!');
                  window.location('/home')
                  })
            .catch(error => {
                console.log(error);
              })
          
              

            

    }
  
    
  
    render() {
        const formwrapper ={
            width: "100%",
            display: "normal",
            padding: "40px 40px",
            borderRadius: "10px",
            boxShadow: "0px 10px 50px #555",
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center"
            
        }
        
    return (
        <div >
            <div style={formwrapper} >
                <form onSubmit={this.onSubmit}>
                  <div>
                    <br></br>
                    <div style={{lineHeight:"30%"}} className="form-group"> 
                    <center><img src={doonlogo} alt="doonlogo" />
                    <h4>Ramzanpur,Begusarai,Bihar</h4><br></br>
                    <h5>(ISO 9001: 2015 CERTIFIED)</h5><br></br>
                    <h3>REGISTRATION FORM</h3><br></br>
                    (play group to standard XI)<br></br><br></br></center>
              </div>
              <br></br>


                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Name of the Student</label>
                    <div className="col-sm-8">
                      <input
                          type="text"
                          placeholder="Enter the full name of the Student"
                          name="nameOfTheStudent"
                          className="form-control"
                          required
                          value={this.state.nameOfTheStudent}
                          onChange={this.onChangenameOfTheStudent}/>
                    </div>
                  </div>

                  <div  className="form-group row">
                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                    <div className="col-sm-8">
                    <input
                        type="date"
                        placeholder="Enter the date of birth of the Student"
                        name="dateOfBirth"
                        className="form-control"
                        required
                        value={this.state.dateOfBirth}
                        onChange={this.onChangedateOfBirth}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Gender</label>
                    <div className="col-sm-8">
                    <select className="form-control" value={this.state.gender} onChange={this.onChangegender}>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Class to which admission is to be sought </label>
                    <div className="col-sm-8">
                    <select  className="form-control" required value={this.state.classAd} onChange={this.onChangeclassAd}>
                    <option value="Play Group">Play Group</option>
                    <option value="1st Grade">1st Grade</option>
                    <option value="2nd Grade">2nd Grade</option>
                    <option value="3rd Grade">3rd Grade</option>
                    <option value="4th Grade">4th Grade</option>
                    <option value="5th Grade">5th Grade</option>
                    <option value="6th Grade">6th Grade</option>
                    <option value="7th Grade">7th Grade</option>
                    <option value="8th Grade">8th Grade</option>
                    <option value="9th Grade">9th Grade</option>
                    <option value="10th Grade">10th Grade</option>
                    </select>
                    </div>
                    </div>

                  
                    
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Father's full name</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Enter Father's full name"
                        type="text"
                        name="fatherName"
                        className="form-control"
                        required
                        value={this.state.fatherName}
                        onChange={this.onChangefatherName}/>
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Mother's name</label>
                    <div className="col-sm-8">
                    <input
                        placeholder=" Enter Mother's name"
                        type="text"
                        name="motherName"
                        className="form-control"
                        required
                        value={this.state.motherName}
                        onChange={this.onChangemotherName} />
                    </div>
                    </div>

                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Occupation</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Enter Occupation"
                        type="text"
                        name="occupation"
                        className="form-control"
                        value={this.state.occupation}
                        onChange={this.onChangeoccupation}
                    />
                    </div>
                    </div>

                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Permanent Address</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Enter Permanent Address"
                        type="text"
                        name="permanentAddress"
                        className="form-control"
                        value={this.state.permanentAddress}
                        onChange={this.onChangepermanentAddress}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Phone Number</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Enter Phone Number"
                        type="number"
                        name="phone"
                        required
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.onChangephone}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">WhatsApp Number</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="Enter WhatsApp Number"
                        type="number"
                        name="whatsAppNumber"
                        required
                        className="form-control"
                        value={this.state.whatsAppNumber}
                        onChange={this.onChangewhatsAppNumber}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Email Id</label>
                    <div className="col-sm-8">
                    <input
                        placeholder="abc@somemail.com"
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={this.state.email}
                        onChange={this.onChangeemail}
                    />
                    </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Category</label>
                    <div className="col-sm-8">
                    <select required className="form-control" value={this.state.category} onChange={this.onChangecategory}>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                    <option value="General">General</option>
                    </select>
                  </div>
                    </div>
                  
                    <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Transport Requirement</label>
                    <div className="col-sm-8">
                    <select required className="form-control" value={this.state.transport} onChange={this.onChangetransport}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                  </div>
                    </div>
                    
                  
                    <div>
                    <h5>Declaration by parent</h5>
                    <input type="checkbox" name="declarationCheck" required checked={this.state.declarationCheck} onChange={this.onChangedeclarationCheck}></input>
                    <label><h6>I hereby certify that all information given above is correct</h6></label>
                    </div>
                    <br></br>
                  
                    
                    <div className="form-group">
                        <input type="submit"
                         required 
                         value="Register" 
                         variant="primary" 
                         className="btn btn-primary" />
                    </div>
                    
                </div>
                </form>
            </div>
        </div>
    );
  }
}
