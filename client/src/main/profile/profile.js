import icons from "../../utils/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/user";
import { useContext } from "react";
import moment from "moment";

const Profile = () => {
  const { user } = useContext(UserContext);



  return (
    <div className="profileContainer">
      <div className="userDetails">
        <div className="coreDetails">
          <div className="pfPic">
            <img src={icons.navIcons.userAvatar.url} alt="profile" />
          </div>
          <div className="userinfo">
            <h1>{user.userName}</h1>
            <h2>
              {user.dept} <span>{user.yearOfAdm}</span>
            </h2>
          </div>
          <div className="butArea">
            <button><img src={icons.navIcons.emailIcon.url} width="30px" alt="send message" />Chat</button>
            <button><img src={icons.action.sendCoins.url} width="30px" alt="send coins" />Send</button>
            <button>Make Mod</button>
          </div>
        </div>
        <div className="subDetails">
          <p>
            Name <span>{`${user.firstName} ${user.lastName}`}</span>
          </p>
          <p>
            Faculty <span>Management Science</span>
          </p>
          <p>
            Gender <span>{user.gender}</span>
          </p>
          <p>
            Age <span>{moment(user.dob).fromNow().split(" ")[0]}</span>
          </p>
          <Link to="/home/updateprf">
            <button>Change</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
