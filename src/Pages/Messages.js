import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import {
  HeaderIcons,
  ProfileImg,
  HeaderText,
} from "../components/Chunks/Chunks";
import { BsGear } from "../Icons";
import MessagesContent from "../components/Messages/MessagesContent";
import MobileTweetButton from "../components/Tweets/MobileTweetButton";
import "../styles/basic.css";
import "../styles/Components/latest-trending.css";
import "../styles/Pages/messages.css";
import "../styles/Header/header.css";

const Messages = () => {
  const { windowSize } = useGlobalContext();

  useEffect(() => {
    document.title = "Messages / X";
  }, []);

  return (
    <>
      <section className="messages-section section-container">
        <Header data="" searchbar={true}>
          <div className="header-top">
            {windowSize > 500 ? (
              <HeaderText text="Messages" />
            ) : (
              <div className="header-top-left">
                <ProfileImg />
                <HeaderText text="Messages" />
              </div>
            )}
            <HeaderIcons icons={[<BsGear />]} />
          </div>
        </Header>

        <div className="messages-content">
          <MessagesContent />
        </div>
      </section>
      {windowSize >= 1081 && (
        <section className="start-conversation-wrapper">
          <div className="start-conversation">
            <h2>Select a message</h2>
            <p>
              Choose from your existing conversations, start a new one, or just
              keep swimming.
            </p>
            <button className="new-message-btn">New message</button>
          </div>
        </section>
      )}
      {windowSize <= 500 && <MobileTweetButton />}
    </>
  );
};

export default Messages;
