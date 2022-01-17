import axios from "axios";

const loginUser = async (data, setErrorMsg) => {
  let success = await axios
    .post("/api/login", data)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((err) => {
      console.log(err.response);
      if(err.response.status > 500){
         setErrorMsg(err.response.data)
      }
    });

  return success;
};


export default loginUser;