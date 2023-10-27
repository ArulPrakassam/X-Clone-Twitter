import TweetsFeed from "../Tweets/TweetsFeed";
import Loading from "../Loading";
import { useGlobalContext } from "../../context";
import { useFetch } from "../useFetch";

const Likes = () => {
  const { likedPostsData, setLikedPostsData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/profile/likes",
    likedPostsData,
    setLikedPostsData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  if (likedPostsData.length === 0) {
    return (
      <div className="no-content">
        <p className="no-content-message-one">
          @ArulPrakassam hasn't liked any posts
        </p>
        <p className="no-content-message-two">
          When they do, those posts will show up here.
        </p>
      </div>
    );
  }
  return <TweetsFeed data={likedPostsData} />;
};

export default Likes;
