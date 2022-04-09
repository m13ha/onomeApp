import axios from "axios";

const getArticles = async () => {
  let data = await axios
    .get("/api/articles")
    .then((results) => {
      return results.data;
    })
    .catch((err) => console.log(err));

    return data;
};

export default getArticles;
