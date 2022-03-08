import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../utils/user";
import icons from "../../utils/icons";
import logOutUser from "../../controller.js/logout";
import numeral from "numeral";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [close, setClose] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    let storage = sessionStorage;
    let currentUser = JSON.parse(storage.getItem("onomeUser"));

    if (currentUser) {
      setUser(currentUser);
      if (currentUser.isVerified === false) {
        navigate("/", { replace: true });
      }
    } else {
      navigate("/", { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let links = document.getElementsByClassName("sideLink");

    for (let i = 0; i < links.length; i++) {
      links[i].className = "sideLink";
    }

    switch (location.pathname) {
      case "/home/feed/news":
      case "/home/feed/memes":
      case "/home/feed/forum":
      case "/home/feedpost":
        links[0].className += " activeTab";
        break;

      case "/home/chats":
        links[1].className += " activeTab";
        break;

      case "/home/map":
        links[2].className += " activeTab";
        break;

      case "/home/market":
        links[3].className += " activeTab";
        break;

      case "/home/kiosk":
        links[4].className += " activeTab";
        break;

      case "/home/profile":
      case "/home/updateprf":
        links[5].className += " activeTab";
        break;

      default:
        break;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleMenuClick = () => {
    let sideNav = document.getElementById("sideNav");

    if (sideNav.className.includes("showSideBar")) {
      sideNav.className = "sideBar";
      setClose(true);
    } else {
      sideNav.className += " showSideBar";
      setClose(false);
    }
  };

  const handleLogOut = async () => {
    let success = await logOutUser(setUser);

    if (success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="navbar">
      <div className="nav">
        <ul className="navList">
          <section className="p-left">
            <li>
              <img
                src={icons.navIcons.userAvatar.url}
                alt="user"
                width="30px"
                height="30px"
              />
            </li>
            <li className="userName">{user.userName}</li>
          </section>
          <section className="p-right">
            <li className="userName">
              <img src={icons.navIcons.buyCoins.url} alt="user" width="25px" />
              <p>{numeral(user.points).format("0.0a")}</p>
            </li>
            <li className="hamBtn">
              {close && (
                <img
                  onClick={handleMenuClick}
                  src={icons.navIcons.menu.url}
                  alt="drop menu"
                  width="40px"
                  height="40px"
                />
              )}
            </li>
          </section>
        </ul>
      </div>
      <div className="sideBar" id="sideNav">
        <ul className="sideList">
          <Link to="/home/feed">
            <li className="sideLink" onClick={handleMenuClick}>
              <img src={icons.navIcons.newsPaper.url} alt="drop menu" />
            </li>
          </Link>
          <Link to="/home/chats">
            <li className="sideLink" onClick={handleMenuClick}>
              <img src={icons.navIcons.emailIcon.url} alt="drop menu" />
            </li>
          </Link>
          <Link to="/home/map">
            <li className="sideLink" onClick={handleMenuClick}>
              <img src={icons.navIcons.pinIcon.url} alt="drop menu" />
            </li>
          </Link>
          <li onClick={handleMenuClick}>
            <img src={icons.navIcons.datingIcon.url} alt="drop menu" />
          </li>
          <Link to="/home/market">
            <li className="sideLink" onClick={handleMenuClick}>
              <img src={icons.navIcons.cartIcon.url} alt="drop menu" />
            </li>
          </Link>
          <li onClick={handleMenuClick}>
            <img src={icons.navIcons.buyCoins.url} alt="drop menu" />
          </li>
          <Link to="/home/kiosk">
            <li className="sideLink" onClick={handleMenuClick}>
              <img src={icons.navIcons.shopIcon.url} alt="drop menu" />
            </li>
          </Link>
          <li className="sideLink" onClick={handleMenuClick}>
            <img src={icons.navIcons.noticeIcon.url} alt="drop menu" />
          </li>
          <Link to="/home/profile">
            <li className="sideLink" onClick={handleMenuClick}>
              <img src={icons.navIcons.setProfile.url} alt="drop menu" />
            </li>
          </Link>
          <li onClick={handleLogOut}>
            <img src={icons.navIcons.logout.url} alt="drop menu" />
          </li>
          <li onClick={handleMenuClick}>
            <img src={icons.navIcons.closeMenu.url} alt="drop menu" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
