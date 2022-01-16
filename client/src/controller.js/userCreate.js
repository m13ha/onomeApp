import axios from "axios";

const createUser = async (data, setErrorMsg, setUser) => {
  let storage = sessionStorage;
  let success = await axios
    .post("/api/reg", data)
    .then((res) => {
      console.log(res);
      storage.setItem(
        "onomeUser",
        JSON.stringify({
          user: true,
          email: res.data.email,
          isVerified: res.data.isVerified
        })
      );
      return true;
    })
    .catch((err) => {
      let response = err.response;
      if (response.status === 500) {
        if (response.data.code === 11000) {
          if (response.data.keyValue.userName) {
            setErrorMsg(
              `The Username ${response.data.keyValue.userName}  already exists`
            );
          } else if (response.data.keyValue.email) {
            setErrorMsg(
              `The email ${response.data.keyValue.email}  already exists`
            );
          }
        }
      } else {
        setErrorMsg("something went wrong");
      }
    });

  return success;
};

export default createUser;
