import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../utils/user";
import postArticle from "../../controller.js/postArticle";
import getArticles from "../../controller.js/getArticles";
import ForumMapper from "./forumMapper";
import icons from "../../utils/icons";

const ForumFeed = () => {
  const storage = sessionStorage;
  const [postArr, setPostsArr] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { user } = useContext(UserContext);
  const [formStatus, setFormStatus] = useState(false);

  useEffect(() => {
    let posts = JSON.parse(storage.getItem("onoPostLogs"));

    if (posts.length > 0) {
      setPostsArr(posts);
    } else {
      getArticles(setPostsArr);
    }
  }, []);

  const handleForumSubmit = async (e) => {
    e.preventDefault();
    let data = {
      title,
      content,
      author: user.userName,
    };

    let success = await postArticle(data, setErrorMsg, "forum");

    if (success) {
      getArticles(setPostsArr);
      loadForumForm();
      setTitle("");
      setContent("");
    }

  };

  const loadForumForm = () => {
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
          <button className="createSessBut" onClick={loadForumForm}>
            +
          </button>
          {user.isMod && (
            <ForumMapper
              postArr={postArr}
              status={"pending"}
              approval={false}
            />
          )}
          {
            <ForumMapper
              postArr={postArr}
              status={"approved"}
              approval={true}
            />
          }
        </div>
      )}
      {formStatus && (
        <div className="feedForm">
          <button className="createSessBut" onClick={loadForumForm}>
            <img
              className="actionIcon"
              src={icons.action.back.url}
              alt={icons.action.back.alt}
            />
          </button>
          <form action="" className="form" onSubmit={handleForumSubmit}>
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
              maxLength="100"
            />
            <label htmlFor="news">Additional Information</label>
            <textarea
              name="news"
              id="news"
              cols="25"
              rows="10"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="(optional)"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ForumFeed;
