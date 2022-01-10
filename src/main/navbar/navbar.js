import { useState } from "react";
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
              <img
                src={icons.navIcons.userAvatar.url}
                alt="user"
                width="40px"
                height="40px"
              />
            </li>
            <li className="userName">Hi, Micheal Nwaokocha</li>
          </section>
          <section className="p-right">
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
      {open && (
        <div className="sideBar">
          <ul className="sideList">
            <Link to="/home/">
              <li>
                <img
                  src={icons.navIcons.newsPaper.url}
                  alt="drop menu"
                  width="20px"

                />
              </li>
            </Link>
            <Link to="/home/chats">
              <li>
                <img
                  src={icons.navIcons.emailIcon.url}
                  alt="drop menu"
                  width="20px"

                />
              </li>
            </Link>
            <Link to="/home/map">
              <li>
                <img
                  src={icons.navIcons.pinIcon.url}
                  alt="drop menu"
                  width="20px"

                />
              </li>
            </Link>
            <Link to="/home/market">
              <li>
                <img
                  src={icons.navIcons.cartIcon.url}
                  alt="drop menu"
                  width="20px"

                />
              </li>
            </Link>
            <Link to="/home/kiosk">
              <li>
                <img
                  src={icons.navIcons.shopIcon.url}
                  alt="drop menu"
                  width="20px"

                />
              </li>
            </Link>
            <Link to="/home/profile">
              <li>
                <img
                  src={icons.navIcons.setProfile.url}
                  alt="drop menu"
                  width="20px"

                />
              </li>
            </Link>
            <li onClick={handleMenuClick}>
              <img
                src={icons.navIcons.closeMenu.url}
                alt="drop menu"
                width="20px"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
