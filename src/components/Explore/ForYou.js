import { SingleTrendingItem } from "../LatestTrending/WhatIsHappening";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import { useFetch } from "../useFetch";

const ForYou = () => {
  const { forYouData, setForYouData } = useGlobalContext();
  const { loading, error } = useFetch(
    "https://x-twitter-clone-server.onrender.com/api/v1/explore/for-you",
    forYouData,
    setForYouData
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return forYouData.map((item, index) => {
    return <SingleTrendingItem key={index} {...item} />;
  });
};
export default ForYou;
