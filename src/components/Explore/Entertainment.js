import { SingleTrendingItem } from "../LatestTrending/WhatIsHappening";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import { useFetch } from "../useFetch";
const Entertainment = () => {
  const { entertainmentData, setEntertainmentData } = useGlobalContext();

  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/explore/entertainment",
    entertainmentData,
    setEntertainmentData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return entertainmentData.map((item, index) => {
    return <SingleTrendingItem key={index} {...item} />;
  });
};

export default Entertainment;
