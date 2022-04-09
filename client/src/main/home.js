// import Study from "./acadmics/studyGroup";
import Kiosk from "./kiosk/kiosk";
import Article from "./feed/article";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../utils/user";
import { useContext } from "react";

import Navbar from "./navbar/navbar";
import Feed from "./feed/feed";
import Chats from "./chatrooms/chat";
import Profile from "./profile/profile";
import Update from "./profile/upateProfile";
import Map from "./map/map";
import Market from "./market/market";
import Notifications from "./notices/notifications";
import MemesFeed from "../main/feed/memesFeed";
import ForumFeed from "../main/feed/forumFeed";
import NewsFeed from "../main/feed/newFeed";
import socket from "../controller/socketServer";

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user.user === null) {
      navigate("/", { replace: true });
    }
    if (location.pathname === "/home") {
      navigate("/home/feed/news", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    socket.emit("user register", {
      username: user.userName,
      verified: user.verified,
      rooms: [user.faculty, "testroom"],
    });
  }, []);

  useEffect(() => {
    socket.on("new user", (data) => {
      console.log(data);
    });

    socket.on("user online", (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <div className="container">
      <Navbar></Navbar>
      <Routes>
        {/* <Route exact path="/" element={<Feed />} /> */}
        <Route path="/feed" element={<Feed />}>
          <Route path="/feed/news" element={<NewsFeed />} />
          <Route path="/feed/forum" element={<ForumFeed />} />
          <Route path="/feed/entertainment" element={<MemesFeed />} />
        </Route>
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/chats" element={<Chats />} />
        <Route exact path="/lovezone" element={<Chats />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/coins" element={<Market />} />
        <Route exact path="/kiosk" element={<Kiosk />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/updateprf" element={<Update />} />
        <Route exact path="/post/:id" element={<Article />} />
      </Routes>
    </div>
  );
};

export default Home;
