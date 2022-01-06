const BusForm = ({resetForm}) => {
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
            <label htmlFor="tel">Phone number</label>
            <br />
            <input id="tel" type="tel" required />
          </div>
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

export default BusForm;
