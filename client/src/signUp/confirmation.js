import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/user";
import { useNavigate } from "react-router-dom";
import verifyUser from "../controller.js/userVerify"

const ConfirmPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [code, setCode] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: user.email,
      code: code,
    };

    let success = await verifyUser(data);

    if (success) {
      let storage = sessionStorage;
      let currentUser = JSON.parse(storage.getItem("onomeUser"));
      currentUser.isVerified = true;
      storage.setItem('onomeUser', currentUser);
      navigate("/", { replace: true });
    }

    console.log(success);
  };

  return (
    <div className="container">
      <div className="confirmField field">
        <p>
          We sent a confirmation code to your student account at email: <br />
          <b>{user.email && user.email}</b>
          <br /> please input it below
        </p>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="number"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
            required
          />
          <button>Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPage;
