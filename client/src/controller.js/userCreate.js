import axios from "axios";

const createUser = (data, setErrorMsg) => {
  axios
    .post("/api/reg", data)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err.response);
      if(err.response.status === 500){
        setErrorMsg(err.response.data);
      }
    });
};

export default createUser;
