import axios from "axios";

const getArticles = async (setNewsArr) => {
  let data = await axios
    .get("/api/articles")
    .then((results) => {
      setNewsArr(results.data);
    })
    .catch((err) => console.log(err));

  return data;
};

export default getArticles;
