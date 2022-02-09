import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import FeedNav from "./feedNav";

const Feed = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home/feed") {
      navigate("/home/feed/news", { replace: true });
    }
  }, [location]);

  return (
    <div className="feedContainer">
      <FeedNav></FeedNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Feed;
