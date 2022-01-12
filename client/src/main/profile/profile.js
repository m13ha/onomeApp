import icons from "../../utils/icons";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="userDetails">
        <div className="coreDetails">
          <div className="pfPic">
            <img src={icons.navIcons.userAvatar.url} alt="profile" />
          </div>
          <div className="userinfo">
            <h1>AngelMikeal </h1>
            <h2>
              Enterpreneurship <span>300</span>
            </h2>
          </div>
          <div className="butArea">
            <button>Message</button>
            <button>Send Points</button>
            <button>Buy Points</button>
          </div>
        </div>
        <div className="subDetails">
          <p>
            Name <span>Nwaokocha Michael</span>
          </p>
          <p>
            Faculty <span>Management Science</span>
          </p>
          <p>
            Gender <span>Male</span>
          </p>
          <p>
            Age <span>23</span>
          </p>
          <p>
            Points <span className="creds">10,000</span>
          </p>
          <p>
            Level <span>300</span>
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
