import { useGlobalContext } from "../../context";
import {
  BiImageAlt,
  MdOutlineGifBox,
  MdOutlinePoll,
  BsEmojiSmile,
} from "../../Icons";
import "../../styles/basic.css";
import "../../styles/Components/compose-tweet.css";

const ComposeTweet = () => {
  const { windowSize, composeTweet, disable, setDisable, inputRef } =
    useGlobalContext();

  return (
    <section className="compose-tweet-section">
      <div className="profile-img">
        <img
          src="https://res.cloudinary.com/dhxjitf9n/image/upload/v1698425446/X%20clone/arul-prakassam.jpg"
          alt="Arul Prakassam"
          onLoad={(e) => (e.currentTarget.style.background = "none")}
        />
      </div>
      <div className="compose-tweet">
        <div className="visibility">
          <p>Everyone</p>
        </div>
        <div className="tweet-input-box">
          <textarea
            name="tweet-box"
            id="tweet-box"
            placeholder="What is happening?!"
            maxLength="280"
            ref={inputRef}
            onChange={(e) => {
              e.currentTarget.parentElement.dataset.replicatedValue =
                e.currentTarget.value;
              setDisable(false);
              if (inputRef.current.value === "") {
                setDisable(true);
              }
            }}
          ></textarea>
        </div>

        <div className="compose-tweet-section-icons">
          <div className="icons-list">
            <span title="media">
              <BiImageAlt />
            </span>
            <span title="gif">
              <MdOutlineGifBox />
            </span>
            <span title="poll">
              <MdOutlinePoll />
            </span>
            <span title="emoji">
              <BsEmojiSmile />
            </span>
          </div>

          {windowSize > 500 && (
            <ComposeButton composeTweet={composeTweet} disable={disable} />
          )}
        </div>
      </div>
    </section>
  );
};

const ComposeButton = ({ composeTweet, disable }) => {
  return (
    <div className="post-tweet-button">
      <button
        className="post-tweet-btn"
        type="button"
        disabled={disable}
        onClick={composeTweet}
      >
        Post
      </button>
    </div>
  );
};

export { ComposeButton };
export default ComposeTweet;
