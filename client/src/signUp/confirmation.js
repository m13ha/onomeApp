import { useContext } from "react";
import { UserContext } from "../utils/user";

const ConfirmPage = () => {
  const {user} = useContext(UserContext);

  return (
    <div className="container">
      <div className="confirmField field">
        <p>
          We sent a confirmation code to your student account at email: <br />
          <b>{user.email}</b>
          <br /> please input it below
        </p>
        <form action="" className="form">
          <input type="text" required />
          <button>Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPage;
