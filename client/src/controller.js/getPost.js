import axios from "axios";

const getPost = async (id) => {
  let data = await axios
    .get("/api/post", { params: { id: id } })
    .then((results) => {
      return results.data;
    })
    .catch((err) => console.log(err));

  return data;
};

export default getPost;
