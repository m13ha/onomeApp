import deleteIcon from "../assets/images/delete.png";
import returnIcon from "../assets/images/turn-back.png";
import commentIconWhite from "../assets/images/commentWhite.png";
import likeIcon from "../assets/images/like.png";
import likedIcon from "../assets/images/love.png";
import viewsIcon from "../assets/images/view.png";
import checkIcon from "../assets/images/check-mark.png";
import sendCoins from "../assets/images/coins.png";


// ACCOLADES ICONS
import jackophyte from "../assets/accolades/book-stack.png";
import superBrain from "../assets/accolades/brain.png";
import bulbBrain from "../assets/accolades/bulb.png";
import crown from "../assets/accolades/king.png";
import medal from "../assets/accolades/medal.png";
import muscles from "../assets/accolades/muscles.png";
import punch from "../assets/accolades/punch.png";
import runner from "../assets/accolades/run.png";
import solar from "../assets/accolades/solar-system.png";
import superhero from "../assets/accolades/superhero.png";

//nav icons

import userAvatar from "../assets/images/home/navbar/user.png";
import menu from "../assets/images/home/navbar/menu.png";
import emailIcon from "../assets/images/home/navbar/email.png";
import pinIcon from "../assets/images/home/navbar/pin.png";
import shopIcon from "../assets/images/home/navbar/shop.png";
import cartIcon from "../assets/images/home/navbar/shopping-cart.png";
import closeMenu from "../assets/images/home/navbar/close.png";
import newsPaper from "../assets/images/home/navbar/newspaper-folded.png";
import setProfile from "../assets/images/home/navbar/settings.png";
import logout from "../assets/images/home/navbar/logout.png";
import buyCoins from "../assets/images/home/navbar/coins.png";
import datingIcon from "../assets/images/home/navbar/relationship.png";
import noticeIcon from "../assets/images/home/navbar/notification.png";


const icons = {
    action: {
        delete: {
            url: deleteIcon,
            alt: "delete"
        },
        back: {
            url: returnIcon,
            alt: "back"
        },
        commentWhite: {
            url: commentIconWhite,
            alt: "comment"
        },
        liked: {
            url: likeIcon,
            alt: "like"
        },
        like: {
            url: likedIcon,
            alt: "liked"
        },
        views: {
            url: viewsIcon,
            alt: "views"
        },
        check: {
            url: checkIcon,
            alt: "check"
        },
        sendCoins: {
            url: sendCoins,
            alt: "check"
        }
    },
    accolades: {
        jacker: {
            url: jackophyte,
            alt: "Accolade",
            title: "Jackophyte Accolade",
            msg: "This accolade is for the prestigious, jacker book na your mate.",
            price: 30,

        },
        brain: {
            url: superBrain,
            alt: "Accolade",
            title: "Brainious Accolade",
            msg: "This accolade is for those individuals who portray high mental alertness and Intelligence, Too much Sense.",
            price: 50,

        },
        bulb: {
            url: bulbBrain,
            alt: "Accolade",
            title: "Ingenious Accolade",
            msg: "This accolade is for those special individuals that transcend the normal capabilities of the brain and go beyond, MAXIMUM INTELLIGENCE!!!",
            price: 50,

        },
        crown: {
            url: crown,
            alt: "Accolade",
            title: "Royal Accolade",
            msg: "This is a special accolade for those individuals whose words deserve to be recognized as royalty, All Hail!.",
            price: 100,

        },
        medal: {
            url: medal,
            alt: "Accolade",
            title: "Medal of Comrade Accolade",
            msg: "This accolade is for the comrades among us, we stand together.",
            price: 30,

        },
        muscles: {
            url: muscles,
            alt: "Accolade",
            title: "Power Accolade",
            msg: "Power is Power but Power pass Power, All power to you comrade",
            price: 100,

        },
        fist: {
            url: punch,
            alt: "Accolade",
            title: "Fist Of Solidarity Accolade",
            msg: "The accolade of Strength and Unity, All power to you Comrade",
            price: 50,

        },
        movement: {
            url: runner,
            alt: "Accolade",
            title: "Movement Accolade",
            msg: "The accolade for the sharpest minds among us",
            price: 50,
        },
        galactic: {
            url: solar,
            alt: "Accolade",
            title: "Galactic Accolade",
            msg: "For those whose awareness and awesomeness span the solar system and beyond.",
            price: 100,
        },
        superComrade: {
            url: superhero,
            alt: "Accolade",
            title: "Super Comrade Accolade",
            msg: "Its a bird, its a plane...no, Its Super Comrade",
            price: 100,
        },
    },
    navIcons: {
        userAvatar: {
            url: userAvatar,
        },
        pinIcon: {
            url: pinIcon,
        },
        menu: {
            url: menu,
        },
        shopIcon: {
            url: shopIcon,
        },
        emailIcon: {
            url: emailIcon,
        },
        cartIcon: {
            url: cartIcon,
        },
        closeMenu: {
            url: closeMenu,
        },
        newsPaper: {
            url: newsPaper,
        },
        setProfile: {
            url: setProfile,
        },
        logout: {
            url: logout,
        },
        buyCoins: {
            url: buyCoins,
        },
        datingIcon: {
            url: datingIcon,
        },
        noticeIcon: {
            url: noticeIcon,
        }
    }
}


export default icons;