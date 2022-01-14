import faculties from "../utils/faculties";
import { useState } from "react";
import { Link } from "react-router-dom";

const Alumni = ({ resetForm }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [pswd, setPswd] = useState();
  const [pswd2, setPswd2] = useState();
  const [age, setAge] = useState();
  const [faculty, setFaculty] = useState();
  const [dept, setDept] = useState();
  const [gender, setGender] = useState();
  const [yearOfAdm, setYearOfAdm] = useState();
  const [tos, setTos] = useState();
  const currentYear = new Date();

  const [depts, setDepts] = useState();

  const loadDepts = (e) => {
    e.preventDefault();
    setDepts(false);
    faculties.forEach((object, index) => {
      if (object.value === e.target.value) {
        setDepts(faculties[index].departments);
      }
    });
  };

  return (
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
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </div>
          <div className="field-mobile">
            <label htmlFor="lastName">Last name</label>
            <br />
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="field-mobile">
            <label htmlFor="userName">Username</label>
            <br />
            <input
              id="userName"
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
          </div>
          <div className="field-mobile">
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non">Rather not say</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="field-mobile">
            <label htmlFor="faculty">Faculty</label>
            <br />
            <select
              name="Faculty"
              id="faculty"
              required
              value={faculty}
              onChange={(e) => {
                loadDepts();
                setFaculty(e.target.value);
              }}
            >
              <option value="--">Select Your Faculty</option>
              {faculties.map((object, index) => {
                return (
                  <option value={object.value} key={index}>
                    {object.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="field-mobile">
            <label htmlFor="department">Department</label>
            <br />
            {depts ? (
              <select
                name="Department"
                id="department"
                value={dept}
                onChange={(e) => {
                  setDept(e.target.value);
                }}
                required
              >
                <option value="--">Select Your Department</option>
                {depts.map((object, index) => {
                  return (
                    <option value={object.value} key={index}>
                      {object.name}
                    </option>
                  );
                })}
              </select>
            ) : (
              <select name="Department" id="department" required>
                <option value="--">Select Your Department</option>
              </select>
            )}
          </div>
        </div>
        <div className="row">
          <div className="field-mobile">
            <label htmlFor="yod">Year of graduatin</label>
            <br />
            <input
              type="number"
              min={currentYear.getFullYear() - 10}
              max={currentYear.getFullYear()}
              step="1"
              name="yog"
              required
              placeholder={currentYear.getFullYear() - 10}
              value={yearOfAdm}
              onChange={(e) => {
                setYearOfAdm(e.target.value);
              }}
            />
          </div>
          <div className="field-mobile">
            <label htmlFor="Age">Age</label>
            <br />
            <input
              id="age"
              type="number"
              min="16"
              name="age"
              placeholder="16"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="field-mobile">
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              type="password"
              name="pwd"
              value={pswd}
              onChange={(e) => {
                setPswd(e.target.value);
              }}
              required
            />
          </div>
          <div className="field-mobile">
            <label htmlFor="password">Re-type Password</label>
            <br />
            <input
              id="password2"
              type="password"
              name="pwd2"
              value={pswd2}
              onChange={(e) => {
                setPswd2(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="row check">
          <div className="errmsg"></div>
          <div className="field-mobile">
            <input
              type="checkbox"
              id="terms"
              name="tos"
              value={tos}
              onChange={(e) => {
                setTos(e.target.checked);
              }}
              required
            />
            <label htmlFor="terms">
              you accept our Terms of use and our Privacy policy
            </label>
          </div>
        </div>
        <div className="field-mobile btn">
          <button onClick={resetForm}>Close</button>
          <Link to="/confirmation">
            <button>Sign-Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Alumni;
