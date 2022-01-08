import deleteIcon from "../assets/images/delete.png";
import returnIcon from "../assets/images/turn-back.png";
import commentIcon from "../assets/images/comment.png";
import likeIcon from "../assets/images/like.png";
import likedIcon from "../assets/images/love.png";
import viewsIcon from "../assets/images/view.png";
import checkIcon from "../assets/images/check-mark.png";

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


const icons = {
    action: {
        delete: {
            location: deleteIcon,
            alt: "delete"
        },
        back: {
            location: returnIcon,
            alt: "back"
        },
        comment: {
            location: commentIcon,
            alt: "comment"
        },
        like: {
            location: likeIcon,
            alt: "like"
        },
        liked: {
            location: likedIcon,
            alt: "liked"
        },
        views: {
            location: viewsIcon,
            alt: "views"
        },
        check: {
            location: checkIcon,
            alt: "check"
        },
    },
    accolades: {
        jacker: {
            location: jackophyte,
            alt: "Accolade",
            title: "Jackophyte Accolade",
            msg: "This accolade is for the prestigious, jacker book na your mate.",
            price: 30,

        },
        brain: {
            location: superBrain,
            alt: "Accolade",
            title: "Brainious Accolade",
            msg: "This accolade is for those individuals who portray high mental alertness and Intelligence, Too much Sense.",
            price: 50,

        },
        bulb: {
            location: bulbBrain,
            alt: "Accolade",
            title: "Ingenious Accolade",
            msg: "This accolade is for those special individuals that transcend the normal capabilities of the brain and go beyond, MAXIMUM INTELLIGENCE!!!",
            price: 50,

        },
        crown: {
            location: crown,
            alt: "Accolade",
            title: "Royal Accolade",
            msg: "This is a special accolade for those individuals whose words deserve to be recognized as royalty, All Hail!.",
            price: 100,

        },
        medal: {
            location: medal,
            alt: "Accolade",
            title: "Medal of Comrade Accolade",
            msg: "This accolade is for the comrades among us, we stand together.",
            price: 30,

        },
        muscles: {
            location: muscles,
            alt: "Accolade",
            title: "Power Accolade",
            msg: "Power is Power but Power pass Power, All power to you comrade",
            price: 100,

        },
        fist: {
            location: punch,
            alt: "Accolade",
            title: "Fist Of Solidarity Accolade",
            msg: "The accolade of Strength and Unity, All power to you Comrade",
            price: 50,

        },
        movement: {
            location: runner,
            alt: "Accolade",
            title: "Movement Accolade",
            msg: "The accolade for the sharpest minds among us",
            price: 50,
        },
        galactic: {
            location: solar,
            alt: "Accolade",
            title: "Galactic Accolade",
            msg: "For those whose awareness and awesomeness span the solar system and beyond.",
            price: 100,
        },
        superComrade: {
            location: superhero,
            alt: "Accolade",
            title: "Super Comrade Accolade",
            msg: "Its a bird, its a plane...no, Its Super Comrade",
            price: 100,
        },
    },
}


export default icons;