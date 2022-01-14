import { Link } from "react-router-dom";
import { useState } from "react";

const BusForm = ({ resetForm }) => {
  const [busName, setBusName] = useState();
  const [userName, setUserName] = useState();
  const [pswd, setPswd] = useState();
  const [pswd2, setPswd2] = useState();
  const [phone, setPhone] = useState();
  const [tos, setTos] = useState();
  const [email, setEmail] = useState();
  const [addr, setAddr] = useState();

  return (
    <div className="form-field">
      <div className="row form-title">
        <div className="field-mobile">
          <h1>Hi, Am here to serve</h1>
        </div>
      </div>
      <form className="form">
        <div className="row">
          <div className="field-mobile">
            <label htmlFor="BusName">Business name</label>
            <br />
            <input
              type="text"
              id="busname"
              name="BusName"
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

export default BusForm;
