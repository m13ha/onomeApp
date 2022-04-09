import axios from "axios";

const postDeny = async (id, author, title) => {
  let success = await axios
    .delete("/api/article", {
      params: {
        id,
        author,
        title,
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

export default postDeny;
