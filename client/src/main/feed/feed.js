import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import FeedNav from "./feedNav";
import socket from "../../controller.js/socketServer";

const Feed = () => {
  let storage = sessionStorage;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home/feed") {
      navigate("/home/news", { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    socket.on("delete post", (data) => {
      let posts = JSON.parse(storage.getItem("onoPostLogs"));
      posts.forEach((object, index) => {
        if (object._id === data) {
          posts.splice(index, 1);
        }
      });
    });

    socket.on("approve post", (data) => {
      let posts = JSON.parse(storage.getItem("onoPostLogs"));
      posts.forEach((object) => {
        if (object._id === data) {
          object.approval = true;
        }
      });
    });

    socket.on("new post", (data) => {
      let posts = JSON.parse(storage.getItem("onoPostLogs"));
      posts.push(data);
    });
  }, [socket]);

  return (
    <div className="feedContainer">
      <FeedNav></FeedNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Feed;
