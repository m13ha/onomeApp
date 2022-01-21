import axios from "axios";

const postForum = async (data, setErrorMsg) => {

  let post = data;
  post.isForum = true;
  post.isNews = false;
  post.approval = false;
  post.likes = 0;
  post.views = 0;

  let success = await axios
    .post("/api/article", data)
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


export default postForum;