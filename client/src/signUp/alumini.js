import faculties from "../utils/faculties";
import createUser from "../controller.js/userCreate";
import { useNavigate } from "react-router-dom";
import { useContext, useState} from "react";
import { UserContext } from "../utils/user";

const Alumni = ({ resetForm }) => {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [pswd, setPswd] = useState('');
  const [pswd2, setPswd2] = useState('');
  const [dob, setDob] = useState('');
  const [faculty, setFaculty] = useState('');
  const [dept, setDept] = useState('');
  const [gender, setGender] = useState('');
  const [yearOfAdm, setYearOfAdm] = useState('');
  const [tos, setTos] = useState('');
  const currentYear = new Date();
  const [depts, setDepts] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const loadDepts = (e) => {
    e.preventDefault();
    setDepts(false);
    faculties.forEach((object, index) => {
      if (object.value === e.target.value) {
        setDepts(faculties[index].departments);
      }
    });
  };

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 8: // Backspace
      case 9: // Tab
      case 13: // Enter
      case 37: // Left
      case 38: // Up
      case 39: // Right
      case 40: // Down
        break;
      default:
        var regex = new RegExp("^[a-zA-Z0-9- _]+$");
        var key = e.key;
        if (!regex.test(key)) {
          e.preventDefault();
          return false;
        }
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
      userName,
      pswd,
      dob: new Date(dob),
      faculty,
      department: dept,
      gender,
      yearOfAdm,
      points: 200,
      tos,
      isStudent: true,
      isCompany: false,
      isAdmin: false,
      isMod: false,
      isVerified: false,
    };
    
    let success = await createUser(data, setErrorMsg, setUser);

    if(success){
      navigate('/confirmation', {replace: true});
    }

    console.log(success);

  };

  const pswdChecker = (value) => {
    if (pswd !== value) {
      setErrorMsg("passwords do not match");
    } else if (value === pswd) {
      setErrorMsg("");
    }
  };

  return (
    <div className="form-field">
    <div className="row form-title">
      <div className="field-mobile">
        <h1>Hi, Am here to help.</h1>
      </div>
    </div>
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="field-mobile">
          <label htmlFor="firstName">First name</label>
          <br />
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onKeyDown={handleKeyDown}
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
            onKeyDown={handleKeyDown}
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
            onKeyDown={handleKeyDown}
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
            <option value="--">your gender</option>
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
              loadDepts(e);
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
          <label htmlFor="yod">Year of Graduation</label>
          <br />
          <input
            type="number"
            min={currentYear.getFullYear() - 10}
            max={currentYear.getFullYear()}
            step="1"
            name="yoa"
            onKeyDown={handleKeyDown}
            required
            placeholder={currentYear.getFullYear() - 10}
            value={yearOfAdm}
            onChange={(e) => {
              setYearOfAdm(e.target.value);
            }}
          />
        </div>
        <div className="field-mobile">
          <label htmlFor="dob">Date Of Birth</label>
          <br />
          <input
            id="dob"
            type="date"
            max={`${currentYear.getFullYear() - 16}-12-12`}
            name="Date of Birth"
            onKeyDown={handleKeyDown}
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
              console.log(e.target.value)
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
            minLength="6"
            name="pwd"
            onKeyDown={handleKeyDown}
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
            minLength="6"
            type="password"
            name="pwd2"
            onKeyDown={handleKeyDown}
            value={pswd2}
            onChange={(e) => {
              setPswd2(e.target.value);
              pswdChecker(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div className="row errmsg">{errorMsg}</div>
      <div className="row check">
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
        <button>Sign-Up</button>
      </div>
    </form>
  </div>
  );
};

export default Alumni;
