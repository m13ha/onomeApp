import avatar from "../assets/images/UserReg/Beautiful-Black-Woman-2.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "./studentForm";
import Alumni from "./alumini";
import BusForm from "./businessForm";
import Login from "./login";

const UserReg = () => {
  const [formType, setFormType] = useState(null);
  const [loginForm, setLoginForm] = useState(true);
  const [regForm, setRegForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let storage = sessionStorage;
    let currentUser = JSON.parse(storage.getItem("onomeUser"));
    if (currentUser) {
      if (currentUser.user === true && currentUser.isVerified === false) {
        console.log(`i work`);
        navigate("/confirmation", { replace: true });
      }
    }
    console.log(currentUser);
  });

  const resetForm = (e) => {
    e.preventDefault();
    setFormType(
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
    setFormType(<Login />);
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
            loadLoginForm();
          } else {
            return formType;
          }
        })()}
      </div>
    </div>
  );
};

export default UserReg;
