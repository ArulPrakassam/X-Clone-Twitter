import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import logo from "../assets/x-twitter-logo.png";
import { HeaderText, ProfileImg } from "../components/Chunks/Chunks";
import LatestTrending from "../components/LatestTrending/LatestTrending";
import SearchBar from "../components/LatestTrending/SearchBar";
import WhatIsHappening from "../components/LatestTrending/WhatIsHappening";
import WhoToFollow from "../components/LatestTrending/WhoToFollow";
import ComposeTweet from "../components/Tweets/ComposeTweet";
import Header from "../components/Header";
import ForYou from "../components/Home/ForYou";
import Following from "../components/Home/Following";
import { headerData } from "../data/header-data";
import FloatingMessageSection from "../components/Messages/FloatingMessageSection";
import MobileTweetButton from "../components/Tweets/MobileTweetButton";
import "../styles/basic.css";
import "../styles/Header/header.css";

const Home = () => {
  const [selected, setSelected] = useState(localStorage.getItem("view") || 0);
  const [disable, setDisable] = useState(true);

  const inputRef = useRef();

  const {
    windowSize,
    lightMode,
    homeFeed,
    setHomeFeed,
    homeFollowingFeed,
    setHomeFollowingFeed,
  } = useGlobalContext();

  useEffect(() => {
    document.title = "Home / X";
  }, []);

  const handler = (id) => {
    setSelected(id);
    localStorage.setItem("view", id);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="section-container home-section">
        <Header selected={selected} data={headerData.home} handler={handler}>
          <div className="header-top">
            <div className="header-top-left">
              {windowSize > 500 ? <HeaderText text="Home" /> : <ProfileImg />}
            </div>
            {windowSize <= 500 && (
              <NavLink to="/home" className="logo">
                <img
                  src={logo}
                  alt="x-twitter logo"
                  className={`${lightMode && "invert-img"}`}
                />
              </NavLink>
            )}
          </div>
        </Header>

        <div className="home-content">
          {windowSize > 500 && (
            <ComposeTweet
              disable={disable}
              setDisable={setDisable}
              inputRef={inputRef}
            />
          )}
          {Number(selected) === 0 ? (
            <ForYou homeFeed={homeFeed} setHomeFeed={setHomeFeed} />
          ) : (
            <Following
              homeFollowingFeed={homeFollowingFeed}
              setHomeFollowingFeed={setHomeFollowingFeed}
            />
          )}
        </div>
      </section>
      {windowSize >= 1081 && (
        <>
          <LatestTrending>
            <SearchBar />
            <WhatIsHappening />
            <WhoToFollow />
          </LatestTrending>
          <FloatingMessageSection />
        </>
      )}
      {windowSize <= 500 && <MobileTweetButton />}
    </>
  );
};

export default Home;
