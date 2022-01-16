// import { u } from "react-router-dom";
import { useState } from "react";
import createUser from "../controller.js/userCreate";

const BusForm = ({ resetForm }) => {
  const [busName, setBusName] = useState("");
  const [userName, setUserName] = useState("");
  const [pswd, setPswd] = useState("");
  const [pswd2, setPswd2] = useState("");
  const [phone, setPhone] = useState("");
  const [tos, setTos] = useState("");
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
        var regex = new RegExp("^[a-zA-Z0-9- ]+$");
        var key = e.key;
        if (!regex.test(key)) {
          e.preventDefault();
          return false;
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      busName,
      userName,
      pswd,
      tos,
      email,
      phone: phone,
      addr: addr,
      isStudent: false,
      isCompany: true,
      isAdmin: false,
      isMod: false,
      isVerified: false,
    };
    console.log(data);

    createUser(data, setErrorMsg);
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
          <h1>Hi, Am here to serve</h1>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="field-mobile">
            <label htmlFor="BusName">Business name</label>
            <br />
            <input
              type="text"
              id="busname"
              name="BusName"
              onKeyDown={handleKeyDown}
              value={busName}
              onChange={(e) => {
                setBusName(e.target.value);
              }}
              required
            />
          </div>
          <div className="field-mobile">
            <label htmlFor="userName">Username</label>
            <br />
            <input
              id="userName"
              type="text"
              name="userName"
              onKeyDown={handleKeyDown}
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="field-mobile">
            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              type="email"
              name="BusName"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="field-mobile">
            <label htmlFor="tel">Phone number</label>
            <br />
            <input
              id="tel"
              type="tel"
              name="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
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
        <div className="row">
          <div className="field-mobile">
            <label htmlFor="Address">Address</label>
            <br />
            <input
              id="address"
              type="text"
              name="addr"
              value={addr}
              onChange={(e) => {
                setAddr(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="row field-mobile">
          <div className="errmsg">{errorMsg}</div>
        </div>
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

export default BusForm;
