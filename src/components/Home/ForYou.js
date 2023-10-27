import TweetsFeed from "../Tweets/TweetsFeed";
import Loading from "../Loading";
import { useFetch } from "../useFetch";

const ForYou = ({ homeFeed, setHomeFeed }) => {
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/home?feed=for-you",
    homeFeed,
    setHomeFeed
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return <TweetsFeed data={homeFeed} />;
};

export default ForYou;
