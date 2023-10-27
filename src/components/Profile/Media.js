import { useGlobalContext } from "../../context";
import TweetsFeed from "../Tweets/TweetsFeed";
import Loading from "../Loading";
import { useFetch } from "../useFetch";

const Media = () => {
  const { mediaData, setMediaData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/profile/posts",
    mediaData,
    setMediaData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  if (mediaData.length === 0) {
    return (
      <div className="no-content">
        <p className="no-content-message-one">
          @ArulPrakassam hasn't posted media
        </p>
        <p className="no-content-message-two">
          Once they do, those posts will show up here.
        </p>
      </div>
    );
  }
  return <TweetsFeed data={mediaData} />;
};
export default Media;
