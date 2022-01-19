import { useState } from "react";
import icons from "../../utils/icons";

const Article = () => {
  let accolades = Object.entries(icons.accolades);
  const [currAccolade, setCurrAccolade] = useState();
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState();

  const handleReplyForm = (e) => {
    e.preventDefault();
    let parent = e.target.parentElement.parentElement.parentElement;
    if (e.target.nodeName === "P") {
      parent.children[1].className = "showForm";
    } else if (e.target.nodeName === "BUTTON") {
      parent.children[1].className = "replyForm";
    }
  };

  const loadAccolade = (e, array) => {
    let accolades = document.getElementsByClassName("accolade-card");
    for (let item of accolades) {
      item.className = "accolade-card";
    }

    e.currentTarget.className += " currAccolade";
    setCurrAccolade(array);
    console.log(array);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="container">
      <div className="blogDetails">
        <img className="blogDetailsimg"
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
        <div className="postData">
          <p>
            <img src={icons.action.views.url} width="25px" alt="views" /> 100
          </p>
          <p>
            <img src={icons.action.liked.url} width="25px" alt="liked" /> 100
          </p>
          <p>
            <img src={icons.action.comment.url} width="25px" alt="comments" />{" "}
            25
          </p>
        </div>
      </div>
      {true && (
        <div className="approval">
          <button>
            <img
              className="actionIcon"
              src={icons.action.check.url}
              alt={icons.action.check.alt}
            />
          </button>
          <button>
            <img
              className="actionIcon"
              src={icons.action.delete.url}
              alt={icons.action.delete.alt}
            />
          </button>
        </div>
      )}
      <div className="comments">
        <div className="commentForm">
          <form action="">
            <textarea
              name="comment"
              id="commentField"
              cols="30"
              rows="10"
              placeholder="Leave a Comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
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
              <p onClick={openModal}>Accolade</p>
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
                <p onClick={openModal}>Accolade</p>
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
      {modal && (
        <div className="accolade-modal">
          <div className="accolades">
            <button onClick={closeModal} className="closeLeft">
              x
            </button>
            {accolades.map((array, index) => {
              return (
                <div
                  key={index}
                  className="accolade-card"
                  onClick={(e) => {
                    loadAccolade(e, array);
                  }}
                >
                  <img
                    className="accoladeMin"
                    src={array[1].url}
                    alt={array[1].alt}
                  />
                  <p>{array[1].title}</p>
                  <p>{array[1].price}</p>
                </div>
              );
            })}
          </div>
          <div className="accolade-details">
            {currAccolade && (
              <div className="accolade-full">
                <img
                  className="accoladeMax"
                  src={currAccolade[1].url}
                  alt={currAccolade[1].alt}
                />
                <h3>{currAccolade[1].title}</h3>
                <p>{currAccolade[1].msg}</p>
              </div>
            )}
            <button>Give</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
