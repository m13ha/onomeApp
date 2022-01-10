import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import icons from "../../utils/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);

  const handleMenuClick = () => {
    if (open) {
      setOpen(false);
      setClose(true);
    } else if (close) {
      setOpen(true);
      setClose(false);
    }
  };

  return (
    <div className="navbar">
      <div className="nav">
        <ul className="navList">
          <section className="p-left">
            <li>
              <img src={icons.navIcons.userAvatar.url} alt="user" width="40px" height="40px" />
            </li>
            <li className="userName">Hi, Micheal Nwaokocha</li>
          </section>
          <section className="p-right">
            <li className="hamBtn">
              {close && (
                <img
                  onClick={handleMenuClick}
                  src={icons.navIcons.menu}
                  alt="drop menu"
                  width="40px"
                  height="40px"
                />
              )}
            </li>
          </section>
        </ul>
      </div>
      {open && (
        <div className="sideBar">
          <ul className="sideList">
            <Link to="/home/">
              <li>
                <img
                  src={icons.navIcons.newsPaper}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            <Link to="/home/chats">
              <li>
                <img
                  src={icons.navIcons.emailIcon}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            {/* <Link >
              <li>
                <img
                  src={bookIcon}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link> */}
            <Link to="/home/map">
              <li>
                <img src={icons.navIcons.pinIcon} alt="drop menu" width="30px" height="30px" />
              </li>
            </Link>
            {/* <Link>
              <li>
                <img
                  src={relaIcon}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link> */}
            <Link to="/home/market">
              <li>
                <img
                  src={icons.navIcons.cartIcon}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            <Link to="/home/kiosk">
              <li>
                <img
                  src={icons.navIcons.shopIcon}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            <Link to="/home/profile">
              <li>
                <img
                  src={icons.navIcons.setProfile}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            <li onClick={handleMenuClick}>
              <img src={icons.navIcons.closeMenu} alt="drop menu" width="30px" height="30px" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
