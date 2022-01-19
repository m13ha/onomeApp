import loginUser from "../controller.js/login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [pswd, setPswd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    let data = {
      userName,
      pswd,
    };

    let success = await loginUser(data, setErrorMsg);

    if (success) {
      navigate('/home', {replace: true});
    }

    console.log(success);
  };

  return (
    <div className="form-field">
      <div className="row form-title">
        <div className="field-mobile">
          <h1>Welcome Back</h1>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row errmsg">{errorMsg}</div>
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
              value={pswd}
              onChange={(e) => {
                setPswd(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="field-mobile btn">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
