import axios from "axios";

const verifyUser = async (data) => {
  let success = await axios
    .post("/api/verify", data)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((err) => {
      console.log(err.response);
    });

  return success;
};


export default verifyUser;