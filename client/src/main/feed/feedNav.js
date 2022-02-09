import { Link } from "react-router-dom";

const FeedNav = () => {
  return (
    <div className="feedNav">
      <ul className="feedNavbar">
        <Link className="feedLink" to="/home/feed/news"  ><li >News</li></Link>
        <Link className="feedLink" to="/home/feed/forum"><li >Forum</li></Link>
        <Link className="feedLink" to="/home/feed/memes" ><li >Memes</li></Link>
      </ul>
    </div>
  );
};

export default FeedNav;
