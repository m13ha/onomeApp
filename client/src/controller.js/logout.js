import axios from "axios";

const logOutUser = async (setUser) => {
  let storage = sessionStorage;
  let success = await axios
    .get("/api/logout")
    .then((res) => {
      storage.removeItem("onomeUser");
      storage.setItem('onoViewLogs', JSON.stringify([]));
      storage.setItem("onoPostArr", JSON.stringify([]));
      storage.setItem("onoPostLogs", JSON.stringify([]));
      storage.setItem("onoLikeLogs", JSON.stringify([]));

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
