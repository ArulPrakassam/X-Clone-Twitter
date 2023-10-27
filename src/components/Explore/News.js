import { SingleTrendingItem } from "../LatestTrending/WhatIsHappening";
import Loading from "../Loading";
import { useFetch } from "../useFetch";
import { useGlobalContext } from "../../context";

const News = () => {
  const { newsData, setNewsData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/explore/news",
    newsData,
    setNewsData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return newsData.map((item, index) => {
    return <SingleTrendingItem key={index} {...item} />;
  });
};

export default News;
