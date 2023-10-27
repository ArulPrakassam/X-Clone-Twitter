import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { AiOutlineClose, BsArrowLeft } from "../../Icons";
import { ComposeButton } from "./ComposeTweet";
import ComposeTweet from "./ComposeTweet";
import "../../styles/basic.css";
import "../../styles/Components/compose-tweet.css";
import "../../styles/Components/compose-tweet-modal.css";

const ComposeTweetModal = () => {
  const { windowSize, composeTweet, disable } = useGlobalContext();

  const navigate = useNavigate();
  const location = useLocation();

  //it has the location object of our previous page
  const history = location?.state;

  const closeModal = () => {
    document.documentElement.style.overflow = "unset";
    if (history) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    document.title = "Compose new post / X";
  }, []);

  return (
    <section className="compose-tweet-modal">
      <div className="compose-tweet-modal-container">
        <div className="compose-tweet-modal-header">
          <button
            type="button"
            className="modal-close-btn"
            onClick={closeModal}
          >
            {windowSize > 500 ? <AiOutlineClose /> : <BsArrowLeft />}
          </button>
          {windowSize <= 500 && (
            <ComposeButton composeTweet={composeTweet} disable={disable} />
          )}
        </div>

        <ComposeTweet />
      </div>
    </section>
  );
};

export default ComposeTweetModal;
