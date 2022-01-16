const Login = () => {
  return (
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
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
