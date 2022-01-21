import axios from "axios";

const viewPost = async (id) => {
  let success = await axios
    .patch("/api/article/view", {
      params: {
        id: id,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response.status > 500) {
        console.log(err.response.data);
      }
    });

  return success;
};

export default viewPost;
