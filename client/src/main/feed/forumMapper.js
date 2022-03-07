import { Link } from "react-router-dom";
import icons from "../../utils/icons";
import moment from "moment";

const ForumMapper = ({
  postArr,
  status,
  approval,
  category,
  timeValue,
}) => {
  let storage = sessionStorage;
  let likeLogs = JSON.parse(storage.getItem("onoLikeLogs"));



  return postArr.map((object, index) => {
    let now = moment(new Date());
    let duration = moment.duration(now.diff(object.createdAt));
    let hours = duration.asHours();

    if (
      object.approval === approval &&
      object.isForum === true &&
      hours <= timeValue
    ) {
      if (category === "All") {
        return (
          <Link className="cardLink" to={`/home/post/${object._id}`} key={index}>
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
                  <img
                    src={
                      likeLogs.includes(object._id)
                        ? icons.action.liked.url
                        : icons.action.like.url
                    }
                    width="25px"
                    alt="liked"
                  />
                  {object.likes}
                </p>
                <p>
                  <img
                    src={icons.action.commentWhite.url}
                    width="25px"
                    alt="comments"
                  />
                  {object.count}
                </p>
              </div>
            </div>
          </Link>
        );
      } else if (object.category === category) {
        return (
          <Link className={`cardLink`} to="/home/feedpost" state={{ article: object }} key={index}>
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
                  <img
                    src={
                      likeLogs.includes(object._id)
                        ? icons.action.liked.url
                        : icons.action.like.url
                    }
                    width="25px"
                    alt="liked"
                  />
                  {object.likes}
                </p>
                <p>
                  <img
                    src={icons.action.commentWhite.url}
                    width="25px"
                    alt="comments"
                  />
                  {object.count}
                </p>
              </div>
            </div>
          </Link>
        );
      }
    }
  });
};

export default ForumMapper;
