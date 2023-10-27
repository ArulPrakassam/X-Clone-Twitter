import Loading from "../Loading";
import { useGlobalContext } from "../../context";
import { useFetch } from "../useFetch";

const WhoToFollow = () => {
  const { whoToFollowData, setWhoToFollow } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/latest-trending/who-to-follow",
    whoToFollowData,
    setWhoToFollow
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return (
    <div className="whoto-follow">
      <h1>Who to follow</h1>
      <div className="whoto-follow-list">
        {whoToFollowData.map((item, index) => {
          const { picture, name } = item;
          return (
            <article className="profile-box-wrapper" key={index}>
              <div className="profile-box">
                <div className="profile-img">
                  <img src={picture} alt="profile" />
                </div>
                <div className="profile-info">
                  <p id="name">{name}</p>
                  <p id="username">@{name}</p>
                </div>
              </div>

              <button type="button" className="follow-btn">
                Follow
              </button>
            </article>
          );
        })}
      </div>

      {/* show more */}
      <div className="trending-show-more">
        <p>Show more</p>
      </div>
    </div>
  );
};

export default WhoToFollow;
