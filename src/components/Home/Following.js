import TweetsFeed from "../Tweets/TweetsFeed";
import Loading from "../Loading";
import { useFetch } from "../useFetch";

const Following = ({ homeFollowingFeed, setHomeFollowingFeed }) => {
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/home?feed=following",
    homeFollowingFeed,
    setHomeFollowingFeed
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return <TweetsFeed data={homeFollowingFeed} />;
};

export default Following;
