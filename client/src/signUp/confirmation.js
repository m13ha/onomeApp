import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/user";
import { useNavigate } from "react-router-dom";
import verifyUser from "../controller/userVerify";

const ConfirmPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [code, setCode] = useState("");

  useEffect(() => {
    let storage = sessionStorage;
    let currentUser = JSON.parse(storage.getItem("onomeUser"));
    if (currentUser) {
      setUser(currentUser);
      if (currentUser.user === false) {
        if (currentUser.email === null) {
          navigate("/", { replace: true });
        }
      }else if (currentUser.isVerified === true) {
        navigate("/", { replace: true });
      }
    }

    console.log(currentUser);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    setErrorMsg('');
    e.preventDefault();
    let data = {
      email: user.email,
      code: code,
    };

    let success = await verifyUser(data, setErrorMsg);

    if (success) {
      let storage = sessionStorage;
      let currentUser = JSON.parse(storage.getItem("onomeUser"));
      currentUser.isVerified = true;
      storage.setItem("onomeUser", JSON.stringify(currentUser));
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
        <div className="row errmsg">{errorMsg}</div>
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
