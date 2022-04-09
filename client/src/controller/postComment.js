import axios from "axios";

const postComment = async (data, kind, setPost) => {
  let success = await axios
    .post(`/api/article/${kind}`, data)
    .then((res) => {
      return(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

  return success;
};

export default postComment;