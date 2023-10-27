import { SingleTrendingItem } from "../LatestTrending/WhatIsHappening";
import { useFetch } from "../useFetch";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";

const Trending = () => {
  const { trendingData, setTrendingData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/explore/trending",
    trendingData,
    setTrendingData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return trendingData.map((item, index) => {
    return <SingleTrendingItem key={index} {...item} />;
  });
};

export default Trending;
