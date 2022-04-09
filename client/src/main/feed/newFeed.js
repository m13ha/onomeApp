import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import postArticle from "../../controller/postArticle";
import getArticles from "../../controller/getArticles";
import NewsMapper from "./newsMapper";
import icons from "../../utils/icons";
import socket from "../../controller/socketServer";

const NewsFeed = () => {
  let navigate = useNavigate()
  const [postArr, setPostsArr] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDesc] = useState("");
  const [postImg, setPostImg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { user } = useContext(UserContext);
  const [formStatus, setFormStatus] = useState(false);

  useEffect(() => {
    (async() => {
      let data = await getArticles()
      if (data) {
        setPostsArr(data);
      }
      })()
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      loadNewsForm();
      setTitle("");
      setDesc("")
      setContent("");
      socket.emit("new post", success);
      navigate(0)
    }

  };

  const loadNewsForm = () => {
    if (formStatus) {
      setFormStatus(false);
    } else {
      setFormStatus(true);
    }
  };

  return (
    <div className="feed">
      {!formStatus && (
        <div className="feedContent">
          {user.isMod && (
            <button className="createSessBut" onClick={loadNewsForm}>
              +
            </button>
          )}
          {user.isMod && (
            <NewsMapper postArr={postArr} status={"pending"} approval={false} />
          )}
          {<NewsMapper postArr={postArr} status={"approved"} approval={true} />}
        </div>
      )}
      {formStatus && (
        <div className="feedForm">
          <button className="createSessBut" onClick={loadNewsForm}>
            <img
              className="actionIcon"
              src={icons.action.back.url}
              alt={icons.action.back.alt}
            />
          </button>
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
      )}
    </div>
  );
};

export default NewsFeed;
