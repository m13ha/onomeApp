import Navbar from "./navbar/navbar";
 //import Feed from "./feed/feed";
//import Chats from "./chatrooms/chat";
//import Profile from "./profile/profile";
//import Update from "./profile/upateProfile";
import Map from "./map/map";

const Home = () => {
    return ( 
       <div className="container">
           <Navbar></Navbar>
           {/* <Feed></Feed> */}
           {/* <Chats></Chats> */}
            {/* <Profile></Profile> */}
            {/* <Update></Update> */}
            <Map></Map>
       </div> 
    );
}
 
export default Home;