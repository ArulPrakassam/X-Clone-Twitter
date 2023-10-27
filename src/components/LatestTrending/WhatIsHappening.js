import { BiDotsHorizontalRounded } from "../../Icons";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { useFetch } from "../useFetch";

const WhatIsHappening = () => {
  const { whatIsHappeningData, setWhatIsHappeningData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/latest-trending/what-is-happening",
    whatIsHappeningData,
    setWhatIsHappeningData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return (
    <div className="whatis-happening">
      <h1>What's happening</h1>
      <div className="latest-trending-topics">
        {/* single item */}
        {whatIsHappeningData.map((item, index) => {
          return <SingleTrendingItem key={index} {...item} />;
        })}
      </div>
      {/* show more */}
      <div className="trending-show-more">
        <Link to="/explore/tabs/for-you">
          <p>Show more</p>
        </Link>
      </div>
    </div>
  );
};

const SingleTrendingItem = ({
  trendingCategory,
  trendingTitle,
  postsCount,
  trendingText,
}) => {
  const { formatToUnits, superText } = useGlobalContext();
  return (
    <article className="latest-trending-single-item">
      <div className="trending-category">
        <p>{trendingCategory}</p>
        <span title="More">
          <BiDotsHorizontalRounded />
        </span>
      </div>
      <div className="trending-content">
        <p className="trending-content-title">{trendingTitle}</p>
        <p
          className="posts-count"
          dangerouslySetInnerHTML={{
            __html: trendingText
              ? superText(trendingText)
              : `${formatToUnits(postsCount)} posts`,
          }}
        ></p>
      </div>
    </article>
  );
};

export default WhatIsHappening;
export { SingleTrendingItem };
