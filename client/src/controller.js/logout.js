import axios from "axios";

const logOutUser = async (setUser) => {
  let storage = sessionStorage;
  let success = await axios
    .get("/api/logout")
    .then((res) => {
      storage.removeItem("onomeUser");
      setUser({
        user: false,
        email: null,
        isVerfied: false,
      });
      return true;
    })
    .catch((err) => console.log(err));

  return success;
};

export default logOutUser;
