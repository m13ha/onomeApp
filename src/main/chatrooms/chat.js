import { useState } from "react/cjs/react.development";

const Chats = () => {
    const [chatList, SetChatList] = useState(true);
    const [chatRooms, setChatRooms] = useState(false);

    const handleChatPick = () => {
        SetChatList(false);
        setChatRooms(true);
    };

    const handleChatClose = () => {
        setChatRooms(false);
        SetChatList(true);
    };


    return (
        <div className="chatContainer">
            {chatList &&
                <div className="chats">
                    <ul className="chatList scroll">
                        <li onClick={handleChatPick}>Department Chat <span className="unread">34</span></li>
                        <li onClick={handleChatPick}>Faculty <span className="unread">34</span></li>
                        <li onClick={handleChatPick}>Susan Okonkwo <span className="unread">34</span></li>
                    </ul>
                </div>
            }
            {
                chatRooms &&
                <div className="chatroom">
                    <button onClick={handleChatClose} className="closeLeft">X</button>
                    <div className="msgs scroll">
                    </div>
                    <form action="">
                        <input type="text" />
                        <button className="sendMsg">Send</button>
                    </form>
                </div>
            }

        </div>
    );
}

export default Chats;