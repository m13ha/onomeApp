import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import postArticle from "../../controller.js/postArticle";
import getArticles from "../../controller.js/getArticles";
import NewsMapper from "./newsMapper";


const NewsFeed = () => {
  const navigate = useNavigate();
  const [newsArr, setNewsArr] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDesc] = useState("");
  const [postImg, setPostImg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    getArticles(setNewsArr);
  }, []);

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      title,
      description,
      content,
      postImg,
      author: user.userName,
    };

    let success = await postArticle(data, setErrorMsg, "news", postImg);

    if (success) {
      navigate(0, { replace: true });
    }

    console.log(success);
  };

  const loadNewsForm = () => {};

  return (
    <div className="feed">
      <div className="feedContent">
        {user.isMod && (
          <button className="createSessBut" onClick={loadNewsForm}>
            +
          </button>
        )}
        {user.isMod && (
          <NewsMapper newsArr={newsArr} status={"pending"} approval={false} />
        )}
        {<NewsMapper newsArr={newsArr} status={"approved"} approval={true} />}
      </div>
      <div className="feedForm">
        <form
          className="form"
          onSubmit={handleArticleSubmit}
          encType="multipart/form-data"
        >
          <div className="row errmsg">{errorMsg}</div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <label htmlFor="desc">Description</label>
          <input
            id="desc"
            type="text"
            value={description}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            maxLength="80"
            required
          />
          <label htmlFor="img" accept="image/png, image/gif, image/jpeg">
            Article Image
          </label>
          <input
            type="file"
            onChange={(e) => {
              setPostImg(e.target.files[0]);
              console.log(e);
            }}
            required
          />
          <label htmlFor="news">Ariticle</label>
          <textarea
            name="news"
            id="news"
            cols="25"
            rows="10"
            placeholder="write your Article here"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            required
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewsFeed;
