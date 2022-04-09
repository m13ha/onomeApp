import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../utils/icons";

const Notifications = () => {
  let navigate = useNavigate();
  let storage = sessionStorage;
  let currentUser = JSON.parse(storage.getItem("onomeUser"));
  let notices = currentUser.notifications;

  useEffect(() => {
    if (notices === false || null) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="notificationsTab">
      <div className="notificationsNav">
        <ul>
          <li>Notifications</li>
        </ul>
      </div>
      <div className="noticeFeed">
        {notices &&
          notices.slice(0).reverse().map((object, index) => {
            if (object.type === "approved") {
              return (
                <Link className="cardLink" to={object.link} key={index}>
                  <div className={`noticeCard`}>
                    <div className="noticeImg">
                      <img
                        src={icons.action.check.url}
                        alt={icons.action.check.alt}
                      />
                    </div>
                    <div className="noticeInfo">
                      <h3>Your Post Was Approved</h3>
                      <p>{object.title}</p>
                    </div>
                  </div>
                </Link>
              );
            } else if (object.type === "denied") {
              return (
                <div className={`noticeCard`} key={index}>
                  <div className="noticeImg badNotice">
                    <img
                      src={icons.action.delete.url}
                      alt={icons.action.delete.alt}
                    />
                  </div>
                  <div className="noticeInfo">
                    <h3>Your Post Was Not Approved</h3>
                    <p>{object.title}</p>
                  </div>
                </div>
              );
            }
          })}

        {/* <div className={`noticeCard`}>
          <div className="noticeImg">
            <img src={icons.action.liked.url} alt={icons.action.liked.alt} />
          </div>
          <div className="noticeInfo">
            <h3>Your post got 10 likes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className={`noticeCard`}>
          <div className="noticeImg">
            <img src={icons.action.views.url} alt={icons.action.views.alt} />
          </div>
          <div className="noticeInfo">
            <h3>Your post got 10 views</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className={`noticeCard`}>
          <div className="noticeImg">
            <img
              src={icons.action.commentWhite.url}
              alt={icons.action.commentWhite.alt}
            />
          </div>
          <div className="noticeInfo">
            <h3>Angelmikeal commented on your post</h3>
            <p>Bla fdfj sjsj bsbss hsjsjs lslsl jsjs jsjsj jsjs jsjs sjs</p>
          </div>
        </div>
        <div className={`noticeCard`}>
          <div className="noticeImg badNotice">
            <img src={icons.action.delete.url} alt={icons.action.delete.alt} />
          </div>
          <div className="noticeInfo">
            <h3>Your Post Was Not Approved</h3>
            <p>title of post</p>
          </div>
        </div>
        <div className={`noticeCard`}>
          <div className="noticeImg">
            <img
              src={icons.action.commentWhite.url}
              alt={icons.action.commentWhite.alt}
            />
          </div>
          <div className="noticeInfo">
            <h3>Angelmikeal replied your comment</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div> */}
        <div className="padder"></div>
      </div>
    </div>
  );
};

export default Notifications;
