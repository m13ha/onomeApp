import icons from "../../utils/icons";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { UserContext } from "../../utils/user";
import { useContext, useEffect, useState } from "react";
import postApprove from "../../controller.js/postApproval";
import postDeny from "../../controller.js/postDeny";
import likePost from "../../controller.js/likePost";
import viewPost from "../../controller.js/viewPost";
import postComment from "../../controller.js/postComment";
import moment from "moment";
import getPost from "../../controller.js/getPost";
import socket from "../../controller.js/socketServer";

const Article = () => {
  let storage = sessionStorage;
  const navigate = useNavigate();
  let location = useLocation();
  const [post, setPost] = useState(false);
  let accolades = Object.entries(icons.accolades);
  const [currAccolade, setCurrAccolade] = useState();
  const [likeState, setLikeState] = useState(icons.action.like.url);
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState();
  const [reply, setReply] = useState();
  const { user } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    let viewLogs = JSON.parse(storage.getItem("onoViewLogs"));
    let likeLogs = JSON.parse(storage.getItem("onoLikeLogs"));
    let postLogs = JSON.parse(storage.getItem("onoPostLogs"));

    (async () => {
      let data = await getPost(id);
      if (data) {
        setPost(data);

        (async () => {
          if (viewLogs.includes(id) === false) {
            let success = await viewPost(id);
            if (success) {
              setPost(success);
              viewLogs.push(id);
              storage.setItem("onoViewLogs", JSON.stringify(viewLogs));
              postLogs.forEach((object, index) => {
                if (object._id === success._id) {
                  postLogs[index] = success;
                }
              });

              storage.setItem("onoPostLogs", JSON.stringify(postLogs));
            }
          }
        })();
      } else {
        navigate(-1);
      }
    })();

    if (likeLogs.includes(id)) {
      setLikeState(icons.action.liked.url);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on("delete post", (data) => {
      let postsLogs = JSON.parse(storage.getItem("onoPostLogs"));
      postsLogs.forEach((object, index) => {
        if (object._id === data) {
          postsLogs.splice(index, 1);
        }
      });
      if (location.pathname === `/home/post/${data}`) {
        navigate(-1);
      }
    });
  }, [socket]);

  const handleReplyForm = (e) => {
    e.preventDefault();
    let forms = document.getElementsByClassName("showForm");

    for (let i = 0; i < forms.length; i++) {
      forms[i].className = "replyForm";
    }

    let parent = e.target.parentElement.parentElement.parentElement;
    if (e.target.nodeName === "P") {
      parent.children[1].className = "showForm";
    } else if (e.target.nodeName === "BUTTON") {
      parent.children[1].className = "replyForm";
    }
  };

  const handleLike = async (e) => {
    let likeLogs = JSON.parse(storage.getItem("onoLikeLogs"));
    let postLogs = JSON.parse(storage.getItem("onoPostLogs"));

    if (likeState === icons.action.like.url) {
      let success = await likePost(id);

      if (success) {
        setLikeState(icons.action.liked.url);
        likeLogs.push(id);
        storage.setItem("onoLikeLogs", JSON.stringify(likeLogs));

        postLogs.forEach((object, index) => {
          if (object._id === success._id) {
            postLogs[index] = success;
          }
        });

        storage.setItem("onoPostLogs", JSON.stringify(postLogs));
        setPost(success);
      }
    } else {
      //do  nothing;
    }
  };

  const loadAccolade = (e, array) => {
    let accolades = document.getElementsByClassName("accolade-card");
    for (let item of accolades) {
      item.className = "accolade-card";
    }

    e.currentTarget.className += " currAccolade";
    setCurrAccolade(array);
    console.log(array);
  };

  const approvePost = async () => {
    let postLogs = JSON.parse(storage.getItem("onoPostLogs"));
    let success = await postApprove(post._id);

    if (success) {
      postLogs.forEach((object, index) => {
        if (object._id === success._id) {
          postLogs[index] = success;
          return;
        }
      });

      socket.emit("approve post", post._id);
      storage.setItem("onoPostLogs", JSON.stringify(postLogs));
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    let postLogs = JSON.parse(storage.getItem("onoPostLogs"));

    let data = {
      to: post._id,
      author: user.userName,
      content: comment,
    };

    let success = await postComment(data, "comment", setPost);
    if (success) {
      setPost(success);
      setComment("");

      postLogs.forEach((object, index) => {
        if (object._id === success._id) {
          postLogs[index] = success;
        }
      });

      storage.setItem("onoPostLogs", JSON.stringify(postLogs));
    }
  };

  const handleReply = async (author, id) => {
    let forms = document.getElementsByClassName("showForm");
    let postLogs = JSON.parse(storage.getItem("onoPostLogs"));

    let data = {
      to: author,
      author: user.userName,
      content: reply,
      post_id: id,
      id,
    };

    console.log(data);

    let success = await postComment(data, "reply", setPost);

    for (let i = 0; i < forms.length; i++) {
      forms[i].className = "replyForm";
    }

    if (success) {
      setPost(success);
      //navigate("/todos", { state: { success } })
      setReply("");
      postLogs.forEach((object, index) => {
        if (object._id === success._id) {
          postLogs[index] = success;
        }
      });

      storage.setItem("onoPostLogs", JSON.stringify(postLogs));
    }
  };

  const deletePost = async () => {
    let postLogs = JSON.parse(storage.getItem("onoPostLogs"));
    let success = await postDeny(post._id);

    if (success) {
      postLogs.forEach((object, index) => {
        if (object._id === post._id) {
          postLogs.splice(index, 1);
        }
      });

      socket.emit("delete post", post._id);

      storage.setItem("onoPostLogs", JSON.stringify(postLogs));
      navigate(-1);
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setCurrAccolade("");
  };

  return (
    post && (
      <div className="container">
        <button
          onClick={(e) => {
            navigate(-1);
          }}
          className="backButton"
        >
          <img
            className="actionIcon"
            src={icons.action.back.url}
            alt={icons.action.back.alt}
          />
        </button>
        <div className="blogDetails">
          {post.isNews && (
            <img
              className="blogDetailsimg"
              src={post.postImg.fullImage}
              alt="post"
            />
          )}
          {post.isForum && <h3 className="articleP">{post.title}</h3>}
          {post.isNews && <h1>{post.title}</h1>}

          {post.content.length > 0 ? (
            <p className="blogContent">{post.content}</p>
          ) : (
            <br></br>
          )}

          <p className="articleP">
            {post.isForum && "Posted"} {post.isNews && "Written"} by{" "}
            {post.author}
          </p>
          <div className="postData">
            <p>
              <img src={icons.action.views.url} width="25px" alt="views" />
              {post.views}
            </p>
            <p onClick={handleLike}>
              <img src={likeState} width="25px" alt="like" />
              {post.likes}
            </p>
            <p>
              <img
                src={icons.action.commentWhite.url}
                width="25px"
                alt="comments"
              />
              {post.count}
            </p>
          </div>
        </div>
        {user.isMod && (
          <div className="approval">
            <button onClick={approvePost}>
              <img
                className="actionIcon"
                src={icons.action.check.url}
                alt={icons.action.check.alt}
              />
            </button>
            <button onClick={deletePost}>
              <img
                className="actionIcon"
                src={icons.action.delete.url}
                alt={icons.action.delete.alt}
              />
            </button>
          </div>
        )}
        <div className="comments">
          <div className="commentForm">
            <form onSubmit={handleComment}>
              <textarea
                name="comment"
                id="commentField"
                cols="30"
                rows="10"
                placeholder="Leave a Comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                required
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
          {post.Comments.map((object, index) => {
            let root = object._id;
            return (
              <div className="comment-field" key={index}>
                <div className="comment">
                  <div className="op-data">
                    <h4>{object.author}</h4>
                    <p>{moment(object.createdAt).fromNow()}</p>
                  </div>
                  <p className="content">{object.content}</p>
                  <div className="comment-actions">
                    <p onClick={openModal}>Accolade</p>
                    <p onClick={handleReplyForm}>Reply</p>
                  </div>
                </div>
                <div className="replyForm">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleReply(object.author, root);
                    }}
                  >
                    <textarea
                      name="reply"
                      id="replyField"
                      cols="30"
                      rows="10"
                      placeholder="Reply"
                      value={reply}
                      onChange={(e) => {
                        setReply(e.target.value);
                      }}
                      required
                    ></textarea>
                    <button onClick={handleReplyForm}>cancel</button>
                    <button>Submit</button>
                  </form>
                </div>
                {object.replies.map((object, index) => {
                  return (
                    <div className="reply-field" key={index}>
                      <div className="reply">
                        <div className="op-data">
                          <b>
                            <p>{object.author}</p>
                          </b>
                          <p>{moment(object.createdAt).fromNow()}</p>
                        </div>
                        <p className="content">
                          <b>{`@${object.to} `}</b>
                          {object.content}
                        </p>
                        <div className="comment-actions">
                          <p onClick={openModal}>Accolade</p>
                          <p onClick={handleReplyForm}>Reply</p>
                        </div>
                      </div>
                      <div className="replyForm">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleReply(object.author, root);
                          }}
                        >
                          <textarea
                            name="reply"
                            id="replyField"
                            cols="30"
                            rows="10"
                            placeholder="Reply"
                            value={reply}
                            onChange={(e) => {
                              setReply(e.target.value);
                            }}
                            required
                          ></textarea>
                          <button onClick={handleReplyForm}>Cancel</button>
                          <button>Submit</button>
                        </form>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {modal && (
          <div className="accolade-modal">
            <div className="accolades">
              <button onClick={closeModal} className="accoladeClose">
                x
              </button>
              {accolades.map((array, index) => {
                return (
                  <div
                    key={index}
                    className="accolade-card"
                    onClick={(e) => {
                      loadAccolade(e, array);
                    }}
                  >
                    <img
                      className="accoladeMin"
                      src={array[1].url}
                      alt={array[1].alt}
                    />
                    <p>{array[1].title}</p>
                    <p>{array[1].price}</p>
                  </div>
                );
              })}
            </div>
            <div className="accolade-details">
              {currAccolade && (
                <div className="accolade-full">
                  <img
                    className="accoladeMax"
                    src={currAccolade[1].url}
                    alt={currAccolade[1].alt}
                  />
                  <h3>{currAccolade[1].title}</h3>
                  <p>{currAccolade[1].msg}</p>
                </div>
              )}
              <button>Give</button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Article;
