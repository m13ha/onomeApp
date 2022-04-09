import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import postArticle from "../../controller/postArticle";
import getArticles from "../../controller/getArticles";
import ForumMapper from "./forumMapper";
import icons from "../../utils/icons";
import socket from "../../controller/socketServer";

const ForumFeed = () => {
  const navigate = useNavigate();
  const [postArr, setPostsArr] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { user } = useContext(UserContext);
  const [formStatus, setFormStatus] = useState(false);
  const [criteria, setCriteria] = useState("");
  const [timeValue, setTimeValue] = useState("720");
  const [category, setCategory] = useState("All");
  const [formCategory, setFormCategory] = useState();
  const [forums, setForums] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await getArticles();
      if (data) {
        setPostsArr(data);
        setCriteria("popular");
        setForums(postArr);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on("new post", (data) => {
      let posts = postArr;
      posts.push(data)
      setPostsArr(posts)
    });

    socket.on("post denied", (data) => {
      let posts = postArr;
      posts.forEach((object, index) => {
        if (object._id === data) {
          posts.splice(index, 1);
        }
      });
      setPostsArr(posts);
    });

    socket.on("post approved", (data) => {
      let posts = postArr;
      posts.forEach((object) => {
        if (object._id === data) {
          object.approval = true;
        }
      });
      setPostsArr(posts)
    });
  }, [socket, postArr]);

  useEffect(() => {
    switch (criteria) {
      case "popular":
        postArr.sort((a, b) => {
          return a.likes + a.views + a.count > b.likes + b.views + b.count
            ? -1
            : 1;
        });
        setForums([]);
        setForums(postArr);
        break;
      case "liked":
        postArr.sort((a, b) => {
          return a.likes > b.likes ? -1 : 1;
        });
        setForums([]);
        setForums(postArr);
        break;
      case "viewed":
        postArr.sort((a, b) => {
          return a.views > b.views ? -1 : 1;
        });
        setForums([]);
        setForums(postArr);
        break;

      default:
        return setForums(postArr);
    }
    console.log(criteria);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [criteria, postArr]);

  const handleForumSubmit = async (e) => {
    e.preventDefault();
    let data = {
      title,
      content,
      author: user.userName,
      category: formCategory,
    };

    let success = await postArticle(data, setErrorMsg, "forum");

    if (success.status === 200) {
      loadForumForm();
      setTitle("");
      setContent("");
      socket.emit("new post", success);
      navigate(0);
    } else {
      console.log(success);
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
          <div className="sortingArea">
            <select
              name="criteria"
              value={criteria}
              onChange={(e) => {
                setCriteria(e.target.value);
                setForums([]);
              }}
            >
              <option value="popular">Most popular</option>
              <option value="liked">Most Liked</option>
              <option value="viewed">Most viewed</option>
            </select>
            <select
              name="Time"
              value={timeValue}
              onChange={(e) => {
                setTimeValue(e.target.value);
              }}
            >
              <option value="24">Today</option>
              <option value="168">This Week</option>
              <option value="720">This Month</option>
            </select>
            <select
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option defaultValue value="All">
                All
              </option>
              <option value="Anime">Anime</option>
              <option value="Comedy">Comedy</option>
              <option value="Culture">Culture</option>
              <option value="Fashion">Fashion</option>
              <option value="Health And Fitness">Health &amp; Fitness</option>
              <option value="Politics">Politics</option>
              <option value="Music">Music</option>
              <option value="Movies And Tvshows">Movies &amp; Tvshows</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
              <option value="Sex">Sex</option>
              <option value="Feelings">Feelings</option>
              <option value="Finance">Finance</option>
              <option value="Gaming">Gaming</option>
              <option value="Food">Food</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
          <div className="currentForum">
            <h1>{category}</h1>
          </div>
          {user.isMod && (
            <ForumMapper
              postArr={forums}
              status={"pending"}
              approval={false}
              category={category}
              timeValue={parseInt(timeValue)}
            />
          )}
          {
            <ForumMapper
              postArr={forums}
              status={"approved"}
              approval={true}
              category={category}
              timeValue={parseInt(timeValue)}
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
            <label htmlFor="category" id="category">
              Category
            </label>
            <select
              name="category"
              value={formCategory}
              onChange={(e) => {
                setFormCategory(e.target.value);
              }}
            >
              <option>Select A Category</option>
              <option value="Anime">Anime</option>
              <option value="Comedy">Comedy</option>
              <option value="Culture">Culture</option>
              <option value="Fashion">Fashion</option>
              <option value="Health And Fitness">Health &amp; Fitness</option>
              <option value="Politics">Politics</option>
              <option value="Music">Music</option>
              <option value="Movies And Tvshows">Movies &amp; Tvshows</option>
              <option value="Science">Science</option>
              <option value="Sports">Sport</option>
              <option value="Sex">Sex</option>
              <option value="Other">Others</option>
            </select>
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
