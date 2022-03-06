import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const FeedNav = () => {
  const location = useLocation();

  useEffect(() => {
    let links = document.getElementsByClassName("feedLink");

    for (let i = 0; i < links.length; i++) {
      links[i].className = "feedLink";
    }

    switch (location.pathname) {
      case "/home/feed/news":
        links[0].className += " activeTab";
        break;
      case "/home/feed/memes":
        links[2].className += " activeTab";
        break;
      case "/home/feed/forum":
        links[1].className += " activeTab";
        break;

      default:
        break;
    }
  }, [location]);

  return (
    <div className="feedNav">
      <ul className="feedNavbar">
        <Link className="feedLink" to="/home/feed/news">
          <li>News</li>
        </Link>
        <Link className="feedLink" to="/home/feed/forum">
          <li>Forum</li>
        </Link>
        <Link className="feedLink" to="/home/feed/entertainment">
          <li>Memes</li>
        </Link>
      </ul>
    </div>
  );
};

export default FeedNav;
