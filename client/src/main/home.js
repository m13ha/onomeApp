import Navbar from "./navbar/navbar";
import Feed from "./feed/feed";
import Chats from "./chatrooms/chat";
import Profile from "./profile/profile";
import Update from "./profile/upateProfile";
import Map from "./map/map";
import Market from "./market/market";
import MemesFeed from "../main/feed/memesFeed";
import ForumFeed from "../main/feed/forumFeed";
import NewsFeed from "../main/feed/newFeed";

// import Study from "./acadmics/studyGroup";
import Kiosk from "./kiosk/kiosk";
import Article from "./feed/article";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      navigate("/home/feed/news", { replace: true });
    }
  }, [location]);



  return (
    <div className="container">
      <Navbar></Navbar>
      <Routes>
        {/* <Route exact path="/" element={<Feed />} /> */}
        <Route path="/feed" element={<Feed />}>
          <Route path="/feed/news" element={<NewsFeed />} />
          <Route path="/feed/forum" element={<ForumFeed />} />
          <Route  path="/feed/entertainment" element={<MemesFeed />} />
        </Route>
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/chats" element={<Chats />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/updateprf" element={<Update />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/kiosk" element={<Kiosk />} />
        <Route exact path="/post/:id" element={<Article />} />
      </Routes>
    </div>
  );
};

export default Home;
