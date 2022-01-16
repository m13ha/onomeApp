import axios from "axios";


const createUser = async (data, setErrorMsg, setUser) => {
  let success = await axios
    .post("/api/reg", data)
    .then((res) => {
      console.log(res)
      setUser(res.data);
      return true;
    })
    .catch((err) => {
      console.log(err.response);
      // if(err.status === 500){
      //   setErrorMsg(err.response);
      // }
    });

    return success
};

export default createUser;
