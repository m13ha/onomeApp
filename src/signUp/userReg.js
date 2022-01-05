import avatar from "../assets/images/UserReg/Beautiful-Black-Woman-2.svg";
import { useState } from "react";

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
    setFormType(
      <div className="form-field">
        <div className="row form-title">
          <div className="field-mobile">
            <h1>Hi, Am here to help.</h1>
          </div>
        </div>
        <form className="form">
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="firstName">First name</label>
              <br />
              <input id="firstName" type="text" required />
            </div>
            <div className="field-mobile">
              <label htmlFor="lastName">Last name</label>
              <br />
              <input id="lastName" type="text" required />
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="userName">Username</label>
              <br />
              <input id="userName" type="text" required />
            </div>
            <div className="field-mobile">
              <label htmlFor="password">Password</label>
              <br />
              <input id="password" type="password" required />
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="faculty">Faculty</label>
              <br />
              <select name="Faculty" id="faculty" required></select>
            </div>
            <div className="field-mobile">
              <label htmlFor="department">Department</label>
              <br />
              <select name="Department" id="department" required></select>
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="level">Level</label>
              <br />
              <select name="Level" id="level" required></select>
            </div>
            <div className="field-mobile">
              <label htmlFor="Age">Age</label>
              <br />
              <input id="age" type="number" min="16" required />
            </div>
          </div>
          <div className="row check">
            <div className="field-mobile">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                you accept our Terms of use and our Privacy policy
              </label>
            </div>
          </div>
          <div className="field-mobile btn">
            <button onClick={resetForm}>Close</button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  };

  const loadBusinessForm = () => {
    setFormType(
      <div className="form-field">
        <div className="row form-title">
          <div className="field-mobile">
            <h1>Hi, Am here to serve</h1>
          </div>
        </div>
        <form className="form">
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="firstName">Business name</label>
              <br />
              <input id="firstName" type="text" required />
            </div>
            <div className="field-mobile">
              <label htmlFor="userName">Username</label>
              <br />
              <input id="userName" type="text" required />
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="email">Email</label>
              <br />
              <input id="email" type="email" required />
            </div>
            <div className="field-mobile">
              <label htmlFor="password">Password</label>
              <br />
              <input id="password" type="password" required />
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="industry">Industry</label>
              <br />
              <select id="industry" required></select>
            </div>
            <div className="field-mobile">
              <label htmlFor="tel">Phone number</label>
              <br />
              <input id="tel" type="tel" required />
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="Address">Address</label>
              <br />
              <input id="address" type="text" required />
            </div>
          </div>
          <div className="row check">
            <div className="field-mobile">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                you accept our Terms of use and our Privacy policy
              </label>
            </div>
          </div>
          <div className="field-mobile btn">
            <button onClick={resetForm}>Close</button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  };

  const loadAlumniForm = () => {
    const currentYear = new Date();

    setFormType(
      <div className="form-field">
        <div className="row form-title">
          <div className="field-mobile">
            <h1>Hi, Am here to help.</h1>
          </div>
        </div>
        <form className="form" action="" method="post">
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="firstName">First name</label>
              <br />
              <input id="firstName" type="text" required />
            </div>
            <div className="field-mobile">
              <label htmlFor="lastName">Last name</label>
              <br />
              <input id="lastName" type="text" required />
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="userName">Username</label>
              <br />
              <input id="userName" type="text" required />
            </div>
            <div className="field-mobile">
              <label htmlFor="password">Password</label>
              <br />
              <input id="password" type="password" required />
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="faculty">Faculty</label>
              <br />
              <select name="Faculty" id="faculty" required></select>
            </div>
            <div className="field-mobile">
              <label htmlFor="department">Department</label>
              <br />
              <select name="Department" id="department" required></select>
            </div>
          </div>
          <div className="row">
            <div className="field-mobile">
              <label htmlFor="yod">Year of Graduation</label>
              <br />
              <input
                type="number"
                min="1980"
                max={currentYear.getFullYear}
                step="1"
                required
                placeholder="1980"
              />
            </div>
            <div className="field-mobile">
              <label htmlFor="Age">Age</label>
              <br />
              <input id="age" type="date" required />
            </div>
          </div>
          <div className="row check">
            <div className="field-mobile">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                you accept our Terms of use and our Privacy policy
              </label>
            </div>
          </div>
          <div className="field-mobile btn">
            <button onClick={resetForm}>Close</button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  };

  // const loadProfForm = () => {
  //   setFormType(
  //     <div className="row form-title">
  //       <div className="form-field">
  //         <button onClick={resetForm} className="closeForm">
  //           X
  //         </button>
  //         <div className="field-mobile">
  //           <h1>Coming Soon!!!</h1>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

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
            <button onClick={resetForm}>Close</button>
            <button>Login</button>
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
                  {/* <button onClick={loadProfForm}>Professor</button> */}
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
