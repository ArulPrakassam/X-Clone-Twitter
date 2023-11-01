import React, { useState, useEffect, useContext, useCallback } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [openAsidebar, setOpenAsidebar] = useState(false);

  const [prevScrollY, setPrevScrollY] = useState(0);

  const [showContent, setShowContent] = useState(true);

  const [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("light-mode")) || false
  );

  const [homeFeed, setHomeFeed] = useState([]);
  const [homeFollowingFeed, setHomeFollowingFeed] = useState([]);
  const [discoverCommunities, setDiscoverCommunities] = useState([]);
  const [forYouData, setForYouData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [listsData, setListsData] = useState([]);
  const [whatIsHappeningData, setWhatIsHappeningData] = useState([]);
  const [whoToFollowData, setWhoToFollow] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [withRepliesData, setWithRepliesData] = useState([]);
  const [likedPostsData, setLikedPostsData] = useState([]);
  const [mediaData, setMediaData] = useState([]);
  const [allNotificationsData, setAllNotificationsData] = useState([]);
  const [verifiedNotificationsData, setVerifiedNotificationsData] = useState(
    []
  );
  const [mentionNotificationsData, setMentionNotificationsData] = useState([]);
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    const scrolling = () => {
      if (window.scrollY > prevScrollY) {
        //scrolling down hide content
        setShowContent(false);
      } else {
        setShowContent(true);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", scrolling);
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, [prevScrollY]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  //used to convert normal number to k, m like 12000 to 12K
  const formatToUnits = useCallback((number) => {
    const abbrev = ["", "K", "M", "B", "T"];
    const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3);
    const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1));
    const suffix = abbrev[order];

    return parseFloat((number / Math.pow(10, order * 3)).toFixed(2)) + suffix;
  }, []);

  //used to convert short number to long number, like 12K to 12,000
  const formatToNumbers = useCallback((number) => {
    const power = {
      K: 3,
      M: 6,
      B: 9,
      T: 12,
    };
    const abbrev = number.substr(number.length - 1);

    if (abbrev.match(/[a-z]/i)) {
      return number.slice(0, number.length - 1) * Math.pow(10, power[abbrev]);
    } else {
      return number;
    }
  }, []);

  const isValidHttpUrl = useCallback((string) => {
    let url;

    try {
      url = new URL(string);
    } catch (error) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }, []);

  //finding text has url and return as text with a href url
  const superText = useCallback((content) => {
    let normalText = content.split(" ");
    let temp = "";
    normalText.forEach((text) => {
      const validateURL = isValidHttpUrl(text);
      if (validateURL) {
        temp += `<a href="${text}" target="_blank" id="link">${text}</a> `;
      } else if (text.startsWith("@") || text.startsWith("#")) {
        temp += `<span id="link">${text}</span>`;
      } else {
        temp += text + " ";
      }
    });
    return temp;
  }, []);

  return (
    <AppContext.Provider
      value={{
        formatToUnits,
        formatToNumbers,
        windowSize,
        openAsidebar,
        setOpenAsidebar,
        showContent,
        superText,
        lightMode,
        setLightMode,
        homeFeed,
        setHomeFeed,
        homeFollowingFeed,
        setHomeFollowingFeed,
        discoverCommunities,
        setDiscoverCommunities,
        forYouData,
        setForYouData,
        entertainmentData,
        setEntertainmentData,
        newsData,
        setNewsData,
        sportsData,
        setSportsData,
        trendingData,
        setTrendingData,
        listsData,
        setListsData,
        whatIsHappeningData,
        setWhatIsHappeningData,
        whoToFollowData,
        setWhoToFollow,
        postsData,
        setPostsData,
        withRepliesData,
        setWithRepliesData,
        likedPostsData,
        setLikedPostsData,
        mediaData,
        setMediaData,
        allNotificationsData,
        setAllNotificationsData,
        verifiedNotificationsData,
        setVerifiedNotificationsData,
        mentionNotificationsData,
        setMentionNotificationsData,
        messageData,
        setMessageData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
