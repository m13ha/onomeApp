import axios from "axios";
import uploadImage from "./upload";

const postArticle = async (data, setErrorMsg, type, img) => {
  let post;

  if (type === "forum") {
    post = data;
    post.isForum = true;
    post.isNews = false;
    post.approval = false;
    post.likes = 0;
    post.views = 0;
    post.count = 0;
  } else if (type === "news") {
    let image = await uploadImage(img).then((resp) => {
      return {
        thumb: resp.data.data.thumb.url,
        fullImage: resp.data.data.image.url,
      };
    });

    post = data;
    post.postImg = image;
    post.isForum = false;
    post.isNews = true;
    post.approval = false;
    post.likes = 0;
    post.views = 0;
    post.count = 0;
  }

  let success = await axios
    .post("/api/article", post)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      if (err.response.status > 500) {
        setErrorMsg(err.response.data);
      }
      console.log(err.response);
    });

  return success;
};

export default postArticle;
