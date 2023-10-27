import { AiOutlinePlus, RiMailAddLine, TbNotes } from "../../Icons";
import { useGlobalContext } from "../../context";
import { Link, useLocation } from "react-router-dom";
import "../../styles/basic.css";
import "../../styles/Components/fixed-tweet-button.css";

const MobileTweetButton = () => {
  const { showContent } = useGlobalContext();
  const location = useLocation();

  return (
    <>
      <section className="mobile-tweet-button">
        <div
          className="fixed-tweet-button"
          style={{ transform: showContent && "translateY(0)" }}
        >
          <div className="post-tweet-button">
            {/* showing message button at bottom */}
            {location.pathname === "/messages" ? (
              <button className="post-tweet-btn" type="button">
                <RiMailAddLine />
              </button>
            ) : //showing lists button at bottom
            location.pathname === "/ArulPrakassam/lists" ? (
              <button className="post-tweet-btn" type="button">
                <TbNotes />
              </button>
            ) : (
              //showing tweet button at bottom
              <Link to="/compose-tweet" state={location}>
                <button className="post-tweet-btn" type="button">
                  <AiOutlinePlus />
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileTweetButton;
