import { useState } from "react";
import newsPaper from "../../assets/images/home/navbar/newspaper-folded.png";
import { Link } from "react-router-dom";

const Feed = () => {
  const [news, setNews] = useState(true);
  const [forum, setForum] = useState(false);
  const [newsForm, setNewsForm] = useState(false);
  const [forumForm, setForumForm] = useState(false);
  const [memes, setMemes] = useState(false);
  const [title, setTitle] = useState();
  const [msg, setMsg] = useState();
  const [desc, setDesc] = useState();
  const [postImg, setPostImg] = useState();

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
            <button className="createSessBut" onClick={loadNewsForm}>
              +
            </button>
            <Link to="/home/feedpost">
              <div className="card">
                <div className="image">
                  <img src={newsPaper} alt="" />
                </div>
                <div className="postinfo">
                  <h1>CULTISM IN BENIN</h1>
                  <p>
                    A look into tht ave sufgj ffhgy bfbfkmfjf bfhfufjkfkf
                    fgfgfgfj 0ososos hdhdudjd djdjdji
                  </p>
                </div>
                <div className="postData">
                  <p>views: 100</p>
                  <p>like: 100</p>
                  <p>Comments: 30</p>
                </div>
              </div>
            </Link>
            <div className="card">
              <div className="image">
                <img src={newsPaper} alt="" />
              </div>
              <div className="postinfo">
                <h1>CULTISM IN BENIN</h1>
                <p>
                  A look into tht ave sufgj ffhgy bfbfkmfjf bfhfufjkfkf fgfgfgfj
                  0ososos hdhdudjd djdjdji
                </p>
              </div>
              <div className="postData">
                <p>views: 100</p>
                <p>like: 100</p>
                <p>Comments: 30</p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={newsPaper} alt="" />
              </div>
              <div className="postinfo">
                <h1>CULTISM IN BENIN</h1>
                <p>
                  A look into tht ave sufgj ffhgy bfbfkmfjf bfhfufjkfkf fgfgfgfj
                  0ososos hdhdudjd djdjdji
                </p>
              </div>
              <div className="postData">
                <p>views: 100</p>
                <p>like: 100</p>
                <p>Comments: 30</p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={newsPaper} alt="" />
              </div>
              <div className="postinfo">
                <h1>CULTISM IN BENIN</h1>
                <p>
                  A look into tht ave sufgj ffhgy bfbfkmfjf bfhfufjkfkf fgfgfgfj
                  0ososos hdhdudjd djdjdji
                </p>
              </div>
              <div className="postData">
                <p>views: 100</p>
                <p>like: 100</p>
                <p>Comments: 30</p>
              </div>
            </div>
          </div>
        )}
        {forum && (
          <div className="feedContent">
            <button className="createSessBut" onClick={loadForumForm}>
              +
            </button>
            <div className="forumCard">
              <div className="op-info">
                <h4>Angelmikeal</h4>
                <p>6 hours ago</p>
              </div>
              <div className="post">
                <h3>Why is pure water so expensive now in uniben?</h3>
              </div>
              <div className="postData">
                <p>views: 100</p>
                <p>like: 100</p>
                <p>Comments: 30</p>
              </div>
            </div>
            <div className="forumCard">
              <div className="op-info">
                <h4>Angelmikeal</h4>
                <p>6 hours ago</p>
              </div>
              <div className="post">
                <h3>Why is pure water so expensive now in uniben?</h3>
              </div>
              <div className="postData">
                <p>views: 100</p>
                <p>like: 100</p>
                <p>Comments: 30</p>
              </div>
            </div>
            <div className="forumCard">
              <div className="op-info">
                <h4>Angelmikeal</h4>
                <p>6 hours ago</p>
              </div>
              <div className="post">
                <h3>Why is pure water so expensive now in uniben?</h3>
              </div>
              <div className="postData">
                <p>views: 100</p>
                <p>like: 100</p>
                <p>Comments: 30</p>
              </div>
            </div>
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
            <form action="" className="form">
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
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                required
              />
              <label htmlFor="img" accept="image/png, image/gif, image/jpeg">
                Article Image
              </label>
              <input
                type="file"
                value={postImg}
                onChange={(e) => {
                  setPostImg(e.target.value);
                }}
              />
              <label htmlFor="news">Ariticle</label>
              <textarea
                name="news"
                id="news"
                cols="30"
                rows="10"
                placeholder="write your Article here"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                required
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        )}
        {forumForm && (
          <div className="row feedForm">
            <form action="" className="form">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label htmlFor="news">Additional Information</label>
              <textarea
                name="news"
                id="news"
                cols="30"
                rows="10"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
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
