import userAvatar from '../../assets/images/home/navbar/user.png';
import menu from "../../assets/images/home/navbar/menu.png";
import bookIcon from "../../assets/images/home/navbar/book.png";
import emailIcon from "../../assets/images/home/navbar/email.png";
import pinIcon from "../../assets/images/home/navbar/pin.png";
import relaIcon from "../../assets/images/home/navbar/relationship.png";
import shopIcon from "../../assets/images/home/navbar/shop.png";
import cartIcon from "../../assets/images/home/navbar/shopping-cart.png";
import closeMenu from "../../assets/images/home/navbar/close.png";
import newsPaper from "../../assets/images/home/navbar/newspaper-folded.png";
import setProfile from "../../assets/images/home/navbar/settings.png";

import { useState } from 'react/cjs/react.development';

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
    }

    return (
        <div className="navbar">
            <div className="nav">
                <ul className="navList">
                    <section className="p-left">
                        <li><img src={userAvatar} alt="user" width="40px" height="40px" /></li>
                        <li className="userName">Hi, Micheal Nwaokocha</li>
                    </section>
                    <section className="p-right">
                        <li className="hamBtn">
                            {close && <img onClick={handleMenuClick} src={menu} alt="drop menu" width="40px" height="40px" />}
                        </li>
                    </section>
                </ul>
            </div>
            {open &&
                <div className="sideBar">
                    <ul className='sideList'>
                        <li><img src={newsPaper} alt="drop menu" width="30px" height="30px" /></li>
                        <li><img src={emailIcon} alt="drop menu" width="30px" height="30px" /></li>
                        <li><img src={bookIcon} alt="drop menu" width="30px" height="30px" /></li>
                        <li><img src={pinIcon} alt="drop menu" width="30px" height="30px" /></li>
                        <li><img src={relaIcon} alt="drop menu" width="30px" height="30px" /></li>
                        <li><img src={cartIcon} alt="drop menu" width="30px" height="30px" /></li>
                        <li><img src={shopIcon} alt="drop menu" width="30px" height="30px" /></li>
                        <li><img src={setProfile} alt="drop menu" width="30px" height="30px" /></li>
                        <li onClick={handleMenuClick}><img src={closeMenu} alt="drop menu" width="30px" height="30px" /></li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default Navbar;