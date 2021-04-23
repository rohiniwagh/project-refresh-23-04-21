import React from "react";
import UseForm from './UseForm';
import validation from './Validation';

function Home() {
   const {handleChange,values, handleSubmit, Clear,errors} = UseForm(validation); 

  return (
    <>
     
      <div className="Fromvalidation">
        <form  onSubmit={handleSubmit} onReset={Clear} >
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <label for="inputdetails">Proposer Details</label>
              </div>
              <div className="col-md-10">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputsal">Salutation</label>
                    <select id="inputsal" className="form-control" required>
                      <option selected>Salutation</option>
                      <option>Mr</option>
                      <option>Ms</option>
                      <option>Mrs</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlfor="Firstname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Firstname"
                      placeholder="First Name"
                      name="Firstname"
                      value={values.Firstname}
                      onChange={handleChange}   
                                       
                    />
                   {errors.Firstname && <p>{errors.Firstname}</p>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlfor="inputMName">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputMName"
                      placeholder="Middle Name"
                      name="inputMName"
                      value={values.inputMName}
                      onChange={handleChange}
                    
                    />
                       {errors.inputMName && <p>{errors.inputMName}</p>}
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputLName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLName"
                      name="inputLName"
                      placeholder="Last Name"
                      value={values.inputLName}
                      onChange={handleChange}
                     required
                    />
                      {errors.inputLName && <p>{errors.inputLName}</p>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputgender">Gender</label>
                    <select id="inputgender" className="form-control"  required>
                      <option selected>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                     
                    </select>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputEmail">Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputemail"
                      placeholder="example@gmail.com"
                      value={values.inputemail}
                      onChange={handleChange}
                      name="inputemail"
                      required
                    />
                    
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputmob">Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputmob"
                      placeholder="Mobile Number"
                      value={values.inputmob}
                      onChange={handleChange}
                      name="inputmob"
                      required
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputDOB">Date Of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputedate"
                      placeholder="07/11/1998"
                      value={values.inputedate}
                       onChange={values.inputedate}
                       name="inputdate"
                       required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputoccpation">Occupation</label>
                    <select id="inputoccpation" className="form-control">
                      <option selected>occpation</option>
                      <option>Salaried</option>
                      <option>Business</option>
                      <option>Student</option>
                    </select>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="inputincome">Annual Income</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputincome"
                      placeholder="&#8377; 100000"
                      value={values.inputincome}
                      onChange={values.inputincome}
                      name="inputincome"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputpan">Pan card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputpan"
                      placeholder="Pan Card"
                      value={values.inputpan}
                      onChange={handleChange}
                      name="inputpan"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputMstatus">Marital status</label>
                    <select id="inputMstatus" className="form-control">
                      <option selected>Marital status</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Engaged</option>
                      <option>Divorced</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputH">Height</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputH"
                      placeholder="Height in CMS"
                      value={values.inputH}
                      onChange={handleChange}
                      name="inputH"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputW">Weight</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputW"
                      placeholder="Weight in Kilograms"
                      value={values.inputW}
                      onChange={handleChange}
                      name="inputW"
                    />
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="row second_form">
              <div className="col-md-2">
                <label for="inputdetails">Nominee Details</label>
              </div>
              <div className="col-md-10">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputFName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFName"
                      placeholder="First Name"
                      value={values.inputFName}
                      onChange={handleChange}
                      name="inputFName"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputMName4">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputMName"
                      placeholder="Middle Name"
                      value={values.inputMName}
                      onChange={handleChange}
                      name="inputMName"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputLName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLName"
                      placeholder="Last Name"
                      value={values.inputLName}
                      onChange={handleChange}
                      name="inputLName"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputRstatus">Relationship</label>
                    <select id="inputRstatus" className="form-control">
                      <option selected>Relationship</option>
                      <option>Father</option>
                      <option>Mather</option>
                      <option>Son</option>
                      <option>Daughter</option>
                      <option>Brother</option>
                      <option>Sister</option>
                    </select>
                  </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputDOB">Date Of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputdate"
                        placeholder="07/11/1998"
                        value={values.inputdate}
                      onChange={handleChange}
                      name="inputdate"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputgender">Gender</label>
                      <select id="inputgender" className="form-control">
                        <option selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                   
                </div>
                    <div className="form-row float-right mt-2">
                    <button type="submit" className="btn btn-sub ">Clear</button>
                    <button type="submit" className="btn btn-sub ">Continue</button>
                    </div>
            
             
            </div>
          </div>
       
       </div> 
       </form>
      </div>
    </>
  );


}

export default Home;
