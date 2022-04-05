import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../utils/user";
import socket from "../../controller.js/socketServer";

const Chats = () => {
  const [chatList, setChatList] = useState(true);
  const [chatRooms, setChatRooms] = useState(false);
  const [chatMsg, setChatMsg] = useState(false);
  const {user} = useContext(UserContext)

  // useEffect(() => {
  //   socket.on("new user", (data) => {
  //     console.log(data);
  //   });

  //   socket.on("user online", (data) => {
  //     console.log(data);
  //   });
  // }, [socket]);

  const handleChatPick = () => {
    setChatList(false);
    setChatRooms(true);
  };

  const handleChatClose = () => {
    setChatRooms(false);
    setChatList(true);
  };

  return (
    <div className="chatContainer">
      {chatList && (
        <div className="chats">
          <ul className="chatList scroll">
            <li onClick={handleChatPick}>
              Department Chat <span className="unread">34</span>
            </li>
            <li onClick={handleChatPick}>
              Faculty <span className="unread">34</span>
            </li>
            <li onClick={handleChatPick}>
              Susan Okonkwo <span className="unread">34</span>
            </li>
          </ul>
        </div>
      )}
      {chatRooms && (
        <div className="chatroom">
          <div className="feedNav">
            <ul className="feedNavbar">
              <button onClick={handleChatClose} className="closeLeft">
                X
              </button>
              <li className="feedLink">Department</li>
            </ul>
          </div>
          <div className="msgs scroll">
            <div className="msgRow">
              <div className="msg">
                <p>Angelmikeal</p>
                <p>Hey Guys whats up?</p>
              </div>
            </div>
            <div className="msgRow-u">
              <div className="userMsg">
                <p>Angelmikeal</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  nobis illo, ad explicabo sed ex aperiam eveniet perferendis ut
                  officiis similique vitae? In ipsam consequuntur asperiores
                  omnis aliquam at doloribus.
                </p>
              </div>
            </div>
            <div className="msgRow">
              <div className="msg">
                <p>Angelmikeal</p>
                <p>Hey Guys whats up?</p>
              </div>
            </div>
            <div className="msgRow">
              <div className="msg">
                <p>Angelmikeal</p>
                <p>Hey Guys whats up?</p>
              </div>
            </div>
            <div className="msgRow">
              <div className="msg">
                <p>Angelmikeal</p>
                <p>Hey Guys whats up?</p>
              </div>
            </div>
            <div className="msgRow">
              <div className="msg">
                <p>Angelmikeal</p>
                <p>Hey Guys whats up?</p>
              </div>
            </div>
            <div className="msgRow">
              <div className="msg">
                <p>Angelmikeal</p>
                <p>Hey Guys whats up?</p>
              </div>
            </div>
            <div className="msgRow">
              <div className="msg">
                <p>Angelmikeal</p>
                <p>Hey Guys whats up?</p>
              </div>
            </div>
          </div>
          <form action="">
            <input
              type="text"
              value={chatMsg}
              onChange={(e) => {
                setChatMsg(e.target.value);
              }}
            />
            <button className="sendMsg">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chats;
