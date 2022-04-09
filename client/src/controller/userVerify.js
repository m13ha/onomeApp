import axios from "axios";

const verifyUser = async (data, setErrorMsg) => {
  let success = await axios
    .post("/api/verify", data)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      if(err.response.status > 500){
         setErrorMsg(err.response.data)
      }
    });

  return success;
};


export default verifyUser;