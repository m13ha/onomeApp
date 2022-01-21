import axios from "axios";
import uploadImage from "./upload";

const postArticle = async (data, setErrorMsg, img) => {
  let image = await uploadImage(img).then((resp) => {
    console.log(resp.data.data);
    return resp.data.data.image.url;
  });

  let post = data;
  post.postImg = image;
  post.isForum = false;
  post.isNews = true;
  post.approval = false;
  post.likes = 0;
  post.views = 0;

  let success = await axios
    .post("/api/article", post)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      if (err.response.status > 500) {
        setErrorMsg(err.response.data);
      }
    });

  return success;
};

export default postArticle;
