import { useGlobalContext } from "../../context";
import { useFetch } from "../useFetch";
import { BiDotsHorizontalRounded } from "../../Icons";
import Loading from "../Loading";

const MessagesContent = () => {
  const { messageData, setMessageData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/messages",
    messageData,
    setMessageData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return messageData.map((item, index) => {
    const { picture, name, time, message } = item;

    return (
      <div className="single-message" key={index}>
        <div className="single-message-wrapper">
          <div className="profile-img">
            <img src={picture} alt={name} />
          </div>
          <div className="message-wrapper">
            <div className="message-header">
              <p id="name">{name}</p>
              <p id="username">@{name}</p>
              <p id="time"> . {time}</p>
            </div>
            <div className="message-content">
              <p>{message}</p>
            </div>
          </div>
        </div>

        <div className="message-options" title="More">
          <BiDotsHorizontalRounded />
        </div>
      </div>
    );
  });
};
export default MessagesContent;
