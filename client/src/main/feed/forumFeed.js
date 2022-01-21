import { Link } from "react-router-dom";
import icons from "../../utils/icons";
import moment from "moment";

const ForumFeed = ({ newsArr, status, approval}) => {
  return newsArr.map((object, index) => {
    moment(object.createdAt).fromNow();
    if (object.approval === approval && object.isForum === true) {
      return (
        <Link to="/home/feedpost" state={{ article: object }} key={index}>
          <div className={`forumCard ${status}`}>
            <div className="op-info">
              <h4>{object.author}</h4>
              <p>{moment(object.createdAt).fromNow()}</p>
            </div>
            <div className="post">
              <h3>{object.title}</h3>
            </div>
            <div className="postData">
              <p>
                <img src={icons.action.views.url} width="25px" alt="views" />
                {object.views}
              </p>
              <p>
                <img src={icons.action.liked.url} width="25px" alt="liked" />
                {object.likes}
              </p>
              <p>
                <img
                  src={icons.action.commentWhite.url}
                  width="25px"
                  alt="comments"
                />
                {object.Comments.length}
              </p>
            </div>
          </div>
        </Link>
      );
    }
  });
};

export default ForumFeed;
