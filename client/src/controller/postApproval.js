import axios from "axios";

const postApprove = async (id, author, link, title) => {
  let success = await axios
    .patch("/api/article/approve", {
      params: {
        id: id,
        author,
        link,
        title
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

export default postApprove;
