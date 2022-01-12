import { Link } from "react-router-dom";

const ConfirmPage = () => {
  return (
    <div className="container">
      <div className="confirmField field">
        <p>
          We sent a confirmation code to your student account at email: <br />
          <b>michael.nwaokocham@mgtsci.uniben.com</b>
          <br /> please input it below
        </p>
        <form action="" className="form">
          <input type="text" required />
          <Link to="/home">
            <button>Confirm</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPage;
