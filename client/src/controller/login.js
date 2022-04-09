import axios from "axios";

const loginUser = async (data, setErrorMsg, setUser) => {
  let storage = sessionStorage;
  let success = await axios
    .post("/api/login", data)
    .then((res) => {
      storage.setItem(
        "onomeUser",
        JSON.stringify(res.data)
      );
      setUser(res.data)
      return true;
    })
    .catch((err) => {
      console.log(err.response)  
      setErrorMsg(err.response.data)
    });

  return success;
};

export default loginUser;
