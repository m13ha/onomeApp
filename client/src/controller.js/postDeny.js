import axios from "axios";

const postDeny = async (id) => {
  let success = await axios
    .delete("/api/article", {
      params: {
        id: id,
      },
    })
    .then((res) => {
      return true;
    })
    .catch((err) => {
      if (err.response.status > 500) {
        console.log(err.response.data);
      }
    });

  return success;
};

export default postDeny;
