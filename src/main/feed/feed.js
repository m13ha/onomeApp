import newsPaper from "../../assets/images/home/navbar/newspaper-folded.png";

const Feed = () => {
    return (
        <div className="feedContainer">
            <div className="feed">
                <div className="feedNav">
                    <ul className="feedNavbar">
                        <li className="feedLink">News</li>
                        <li className="feedLink">General Discussion</li>
                        <li className="feedLink">Memes</li>
                    </ul>
                </div>
                <div className="feedContent">
                <div className="card">
                        <div className="image">
                            <img src={newsPaper} alt=""  />
                        </div>
                        <div className="info">
                            <h1>CULTISM IN BENIN</h1>
                            <p>A look into tht ave sufgj ffhgy bfbfkmfjf bfhfufjkfkf fgfgfgfj 0ososos hdhdudjd djdjdji</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={newsPaper} alt=""  />
                        </div>
                        <div className="info">
                            <h1>CULTISM IN BENIN</h1>
                            <p>A look into tht ave sufgj ffhgy bfbfkmfjf bfhfufjkfkf fgfgfgfj 0ososos hdhdudjd djdjdji</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={newsPaper} alt=""  />
                        </div>
                        <div className="info">
                            <h1>CULTISM IN BENIN</h1>
                            <p>A look into tht ave sufgj ffhgy bfbfkmfjf bfhfufjkfkf fgfgfgfj 0ososos hdhdudjd djdjdji</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={newsPaper} alt=""  />
                        </div>
                        <div className="info">
                            <h1>CULTISM IN BENIN</h1>
                            <p>A look into tht ave sufgj ffhgy bfbfkmfjf bfhfufjkfkf fgfgfgfj 0ososos hdhdudjd djdjdji</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;