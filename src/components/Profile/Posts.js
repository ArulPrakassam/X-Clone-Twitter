import { useFetch } from "../useFetch";
import TweetsFeed from "../Tweets/TweetsFeed";
import Loading from "../Loading";
import { useGlobalContext } from "../../context";

const Posts = () => {
  const { postsData, setPostsData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/profile/posts",
    postsData,
    setPostsData
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return <TweetsFeed data={postsData} />;
};

export default Posts;
