import axios from "axios";

const loginUser = async (data, setErrorMsg) => {
  let storage = sessionStorage;
  let success = await axios
    .post("/api/login", data)
    .then((res) => {
      console.log(res.data);
      storage.setItem(
        "onomeUser",
        JSON.stringify(res.data)
      );
      return true;
    })
    .catch((err) => {
      console.log(err.response)  
      setErrorMsg(err.response.data)
    });

  return success;
};

export default loginUser;
