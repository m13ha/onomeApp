import avatar from "../assets/images/UserReg/Beautiful-Black-Woman-2.svg";
import { useState } from "react";
import StudentForm from "./studentForm";
import Alumni from "./alumini";
import BusForm from "./businessForm";
import { Link } from "react-router-dom";

const UserReg = () => {
  const [formType, setFormType] = useState(null);
  const [loginForm, setLoginForm] = useState(true);
  const [regForm, setRegForm] = useState(false);

  const resetForm = () => {
    setFormType(null);
    setLoginForm(true);
    setRegForm(false);
  };

  const loadStudentForm = (e) => {
    setFormType(<StudentForm resetForm={resetForm}></StudentForm>);
  };

  const loadBusinessForm = () => {
    setFormType(<BusForm resetForm={resetForm}></BusForm>);
  };

  const loadAlumniForm = () => {
    setFormType(<Alumni resetForm={resetForm}></Alumni>);
  };

  const loadLoginForm = () => {
    setFormType(
      <div className="form-field">
        <div className="row form-title">
          <div className="field-mobile">
            <h1>Welcome Back</h1>
          </div>
        </div>
        <form className="form">
          <div className="field-mobile">
            <label htmlFor="userName">Username</label>
            <br />
            <input id="userName" type="text" required />
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="password">Password</label>
              <br />
              <input id="password" type="password" required />
            </div>
          </div>
          <div className="field-mobile btn">
            <Link to="/home">
              <button>Login</button>
            </Link>
          </div>
        </form>
      </div>
    );
    setRegForm(true);
    setLoginForm(false);
  };

  return (
    <div className="container fit-screen">
      <div className="field avatar-loca">
        <img src={avatar} alt="" width="100%" height="100%" />
      </div>
      <div className="field">
        <div className="loginBut">
          {loginForm && <button onClick={loadLoginForm}>Login</button>}
          {regForm && <button onClick={resetForm}>Register</button>}
        </div>
        {(() => {
          if (formType === null) {
            return (
              <div className="row">
                <div className="row form-title">
                  <div className="field-mobile">
                    <h1>Welcome</h1>
                  </div>
                </div>
                <div className="row userType">
                  <button onClick={loadStudentForm}>Undergraduate</button>
                  <button onClick={loadAlumniForm}>Alumni</button>
                  <button onClick={loadBusinessForm}>Business</button>
                </div>
              </div>
            );
          } else {
            return formType;
          }
        })()}
      </div>
    </div>
  );
};

export default UserReg;
