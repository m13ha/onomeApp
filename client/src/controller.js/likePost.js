import axios from "axios";

const likePost = async (id) => {
  let success = await axios
    .patch("/api/article/like", {
      params: {
        id: id,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response.status > 500) {
        console.log(err.response.data);
      }
    });

  return success;
};

export default likePost;
