const Article = () => {
  const handleReplyForm = (e) => {
    e.preventDefault();
    let element = e.target;
    let parent = e.target.parentElement.parentElement.parentElement;
    if (e.target.nodeName === "P") {
      parent.children[1].className = "showForm";
    } else if (e.target.nodeName === "BUTTON") {
      parent.children[1].className = "replyForm";
    }
  };

  return (
    <div className="container">
      <div className="blogDetails">
        <img
          src="https://uniben.edu.ng/wp-content/uploads/2021/01/149440-OTYQY4-678-1-300x148.png"
          alt=""
        />
        <h1>Cultism In Benin</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          delectus omnis voluptatum iusto animi provident recusandae distinctio
          inventore! Culpa ullam eveniet ea inventore quos hic voluptatibus,
          quisquam aliquid ad itaque. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Iusto sunt placeat ipsam voluptatem, omnis
          voluptatibus nisi animi neque eius molestias provident vitae
          dignissimos possimus accusantium deserunt doloribus eos, iste
          incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi blanditiis officia, ullam cum, ab consectetur tenetur minus
          cumque deleniti, et beatae iure. Ex magni magnam repellat sed delectus
          explicabo rem. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Amet quam quidem sed adipisci aliquam fugit harum aperiam enim,
          voluptate, esse numquam voluptates dolor eligendi veritatis deleniti
          animi quisquam nobis cupiditate. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corporis laudantium dicta assumenda?
          Magni earum voluptates optio dolore doloremque vero numquam aut, cum
          officiis ipsa libero illo nisi dolor similique doloribus? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid optio, placeat
          nemo vero ab expedita rerum eius, magnam at nam quis explicabo? Totam
          error illo enim accusamus itaque dolor temporibus! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Unde quibusdam ad labore porro
          nulla, rerum quis fugiat optio eaque qui facilis, suscipit error
          tempora architecto accusantium harum ratione odit quisquam.
        </p>
      </div>
      <div className="approval">
        <button>Approve</button>
        <button>Delete</button>
      </div>
      <div className="comments">
        <div className="commentForm">
          <form action="">
            <textarea
              name="comment"
              id="commentField"
              cols="30"
              rows="10"
              placeholder="Leave a Comment"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div className="comment-field">
          <div className="comment">
            <div className="op-data">
              <h4>Angelmikeal</h4>
              <p>6 hours ago</p>
            </div>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              officia minima ullam eaque repudiandae, perspiciatis aliquam quas,
              placeat dicta, harum aperiam? Ab provident temporibus eius eum
              quae quis debitis nulla?
            </p>
            <div className="comment-actions">
              <p>Accolade</p>
              <p onClick={handleReplyForm}>Reply</p>
              <p>Report</p>
            </div>
          </div>
          <div className="replyForm">
            <form action="">
              <textarea
                name="reply"
                id="replyField"
                cols="30"
                rows="10"
                placeholder="Reply"
              ></textarea>
              <button onClick={handleReplyForm}>cancel</button>
              <button>Submit</button>
            </form>
          </div>
          <div className="reply-field">
            <div className="reply">
              <div className="op-data">
                <h4>Angelmikeal</h4>
                <p>6 hours ago</p>
              </div>
              <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                officia minima ullam eaque repudiandae, perspiciatis aliquam
                quas, placeat dicta, harum aperiam? Ab provident temporibus eius
                eum quae quis debitis nulla?
              </p>
              <div className="comment-actions">
                <p>Accolade</p>
                <p onClick={handleReplyForm}>Reply</p>
                <p>Report</p>
              </div>
            </div>
            <div className="replyForm">
              <form action="">
                <textarea
                  name="reply"
                  id="replyField"
                  cols="30"
                  rows="10"
                  placeholder="Reply"
                ></textarea>
                <button onClick={handleReplyForm}>Cancel</button>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
