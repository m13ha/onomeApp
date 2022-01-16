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
      // if(err.status === 500){
      //   setErrorMsg(err.response);
      // }
    });

  return success;
};