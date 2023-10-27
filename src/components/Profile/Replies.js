import TweetsFeed from "../Tweets/TweetsFeed";
import Loading from "../Loading";
import { useGlobalContext } from "../../context";
import { useFetch } from "../useFetch";

const Replies = () => {
  const { withRepliesData, setWithRepliesData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/profile/with-replies",
    withRepliesData,
    setWithRepliesData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return <TweetsFeed data={withRepliesData} />;
};

export default Replies;
