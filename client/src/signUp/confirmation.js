import { useContext, useEffect } from "react";
import { UserContext } from "../utils/user";
import { useNavigate } from "react-router-dom";

const ConfirmPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    let storage = sessionStorage;
    let currentUser = JSON.parse(storage.getItem("onomeUser"));
    if (currentUser) {
      setUser(currentUser);
      if (currentUser.user === false) {
        if (currentUser.isVerified === true) {
          navigate("/", { replace: true });
        } else if (currentUser.email === null) {
          navigate("/", { replace: true });
        }
      }
    }

    console.log(currentUser);
  }, []);

  return (
    <div className="container">
      <div className="confirmField field">
        <p>
          We sent a confirmation code to your student account at email: <br />
          <b>{user.email && user.email}</b>
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
