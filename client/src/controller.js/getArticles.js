import axios from "axios";

const getArticles = (setPostsArr) => {
  const storage = sessionStorage;
  let data = axios
    .get("/api/articles")
    .then((results) => {
      setPostsArr(results.data);
      storage.setItem("onoPostLogs", JSON.stringify(results.data))
    })
    .catch((err) => console.log(err));

  return data;
};

export default getArticles;
