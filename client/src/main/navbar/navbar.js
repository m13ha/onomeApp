import {useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/user";
import icons from "../../utils/icons";
import logOutUser from "../../controller.js/logout";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    let storage = sessionStorage;
    let currentUser = JSON.parse(storage.getItem("onomeUser"));
    if (currentUser) {
      setUser(currentUser);
      console.log(currentUser);
      if(currentUser.isVerified === false){
        navigate('/', {replace: true})
      }
    }else {
      navigate('/', {replace: true})
    }

    console.log(currentUser);
  }, []);

  const handleMenuClick = () => {
    if (open) {
      setOpen(false);
      setClose(true);
    } else if (close) {
      setOpen(true);
      setClose(false);
    }
  };

  const handleLogOut = async () => {
      let success = await logOutUser(setUser);

      if(success){
        navigate('/', {replace: true});
      }
  }

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
            <li className="userName">{user.userName}</li>
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
              <li  onClick={handleMenuClick}>
                <img
                  src={icons.navIcons.newsPaper.url}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            <Link to="/home/chats">
              <li  onClick={handleMenuClick}>
                <img
                  src={icons.navIcons.emailIcon.url}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            <Link to="/home/map">
              <li  onClick={handleMenuClick}>
                <img
                  src={icons.navIcons.pinIcon.url}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            <Link to="/home/market">
              <li  onClick={handleMenuClick}>
                <img
                  src={icons.navIcons.cartIcon.url}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li>
            </Link>
            <Link to="/home/kiosk">
              <li  onClick={handleMenuClick}>
                <img
                  src={icons.navIcons.shopIcon.url}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                />
              </li >
            </Link>
            <Link to="/home/profile">
              <li  onClick={handleMenuClick}>
                <img
                  src={icons.navIcons.setProfile.url}
                  alt="drop menu"
                  width="30px"
                  height="30px"
                 
                />
              </li>
            </Link>
            <li onClick={handleLogOut}>
              <img
                src={icons.navIcons.logout.url}
                alt="drop menu"
                width="30px"
                height="30px"
              />
            </li>
            <li onClick={handleMenuClick}>
              <img
                src={icons.navIcons.closeMenu.url}
                alt="drop menu"
                width="30px"
                height="30px"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
