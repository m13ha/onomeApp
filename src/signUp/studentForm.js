import faculties from "../utils/faculties";
import { useState } from "react";

const StudentForm = ({ resetForm }) => {
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
            <select name="Faculty" id="faculty" required onChange={loadDepts}>
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
              <select name="Department" id="department" required>
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
            <label htmlFor="yod">Year of Admission</label>
            <br />
            <input
              type="number"
              min={currentYear.getFullYear() - 10}
              max={currentYear.getFullYear()}
              step="1"
              required
              placeholder={currentYear.getFullYear() - 10}
            />
          </div>
          <div className="field-mobile">
            <label htmlFor="Age">Age</label>
            <br />
            <input id="age" type="number" min="16" placeholder="16" required />
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

export default StudentForm;
