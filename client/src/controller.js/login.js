import axios from "axios";

const loginUser = async (data, setErrorMsg) => {
  let storage = sessionStorage;
  let success = await axios
    .post("/api/login", data)
    .then((res) => {
      storage.setItem(
        "onomeUser",
        JSON.stringify({
          busName: res.data.busName,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          userName: res.data.userName,
          isCompany: res.data.isCompany,
          isMod: res.data.isMod,
          isAdmin: res.data.isAdmin,
          isVerified: res.data.isVerfied,
          email: res.data.email,
          points: res.data.points,
        })
      );
      console.log(res);
      return true;
    })
    .catch((err) => console.log(err));

  return success;
};

export default loginUser;
