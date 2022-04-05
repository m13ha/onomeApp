import axios from "axios";

const getArticles = async () => {
  const storage = sessionStorage;
  let data = await axios
    .get("/api/articles")
    .then((results) => {
      storage.setItem("onoPostLogs", JSON.stringify(results.data))
      return results.data;
    })
    .catch((err) => console.log(err));

    return data;
};

export default getArticles;
