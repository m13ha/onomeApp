import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../utils/user";
import {useNavigate } from "react-router-dom";
import postArticle from "../../controller.js/postArticle";
import getArticles from "../../controller.js/getNews";
import NewsFeed from "./newsFeed";
import ForumFeed from "./forumFeed";

const Feed = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState(true);
  const [forum, setForum] = useState(false);
  const [newsForm, setNewsForm] = useState(false);
  const [newsArr, setNewsArr] = useState([]);
  const [forumForm, setForumForm] = useState(false);
  const [memes, setMemes] = useState(false);
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

    let success = await postArticle(data, setErrorMsg, 'news', postImg);

    if (success) {
      navigate(0, { replace: true });
    }

    console.log(success);
  };

  const handleForumSubmit = async (e) => {
    e.preventDefault();
    let data = {
      title,
      content,
      author: user.userName,
    };

    let success = await postArticle(data, setErrorMsg, 'forum');

    if (success) {
      navigate(0, { replace: true });
    }

    console.log(success);
  };

  const loadNews = () => {
    setMemes(false);
    setForum(false);
    setForumForm(false);
    setNewsForm(false);
    setNews(true);
  };

  const loadNewsForm = () => {
    setMemes(false);
    setForum(false);
    setNews(false);
    setForumForm(false);
    setNewsForm(true);
  };

  const loadForum = () => {
    setMemes(false);
    setNews(false);
    setForumForm(false);
    setNewsForm(false);
    setForum(true);
  };

  const loadForumForm = () => {
    setMemes(false);
    setForum(false);
    setNews(false);
    setNewsForm(false);
    setForumForm(true);
  };

  const loadMemes = () => {
    setForum(false);
    setNews(false);
    setNewsForm(false);
    setForumForm(false);
    setMemes(true);
  };
  return (
    <div className="feedContainer">
      <div className="feed">
        <div className="feedNav">
          <ul className="feedNavbar">
            <li onClick={loadNews} className="feedLink">
              News
            </li>
            <li onClick={loadForum} className="feedLink">
              Forum
            </li>
            <li onClick={loadMemes} className="feedLink">
              Memes
            </li>
          </ul>
        </div>
        {news && (
          <div className="feedContent">
            {user.isMod && (
              <button className="createSessBut" onClick={loadNewsForm}>
                +
              </button>
            )}
            {user.isMod && <NewsFeed newsArr={newsArr} status={'pending'} approval={false}/>}
            {<NewsFeed newsArr={newsArr} status={'approved'} approval={true}/>}
          </div>
        )}
        {forum && (
          <div className="feedContent">
            <button className="createSessBut" onClick={loadForumForm}>
              +
            </button>
            {user.isMod && <ForumFeed newsArr={newsArr} status={'pending'} approval={false}/>}
            {<ForumFeed newsArr={newsArr} status={'approved'} approval={true}/>}
          </div>
        )}
        {memes && (
          <div className="feedContent">
            <div className="meme">
              <img
                src="https://preview.redd.it/pnlr8biw50881.png?width=640&crop=smart&auto=webp&s=11ec453b6053ed3bc4bd85406a386e5c5dad1c2b"
                alt="meme"
                width="200px"
              />
            </div>
          </div>
        )}
        {newsForm && (
          <div className="row feedForm">
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
        )}
        {forumForm && (
          <div className="row feedForm">
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
    </div>
  );
};

export default Feed;
