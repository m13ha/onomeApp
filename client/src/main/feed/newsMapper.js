import { Link } from "react-router-dom";
import icons from "../../utils/icons";

const NewsMapper = ({ newsArr, status, approval }) => {
  let storage = sessionStorage;
  let likeLogs = JSON.parse(storage.getItem("onoLikeLogs"));

  return newsArr.map((object, index) => {
    if (object.approval === approval && object.isNews === true) {
      return (
        <Link to="/home/feedpost" state={{ article: object }} key={index}>
          <div className={`card ${status}`}>
            <div className="image">
              <img src={object.postImg}/>
            </div>
            <div className="postinfo">
              <h2>{object.title}</h2>
              <p>{object.description}</p>
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
  });
};

export default NewsMapper;
