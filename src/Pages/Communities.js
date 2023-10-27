import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import {
  HeaderIcons,
  BackArrow,
  HeaderText,
} from "../components/Chunks/Chunks";
import { BiSearch, BsPeople } from "../Icons";
import LatestTrending from "../components/LatestTrending/LatestTrending";
import SearchBar from "../components/LatestTrending/SearchBar";
import WhatIsHappening from "../components/LatestTrending/WhatIsHappening";
import WhoToFollow from "../components/LatestTrending/WhoToFollow";
import FloatingMessageSection from "../components/Messages/FloatingMessageSection";
import CommunitiesContent from "../components/Communities/CommunitiesContent";
import MobileTweetButton from "../components/Tweets/MobileTweetButton";
import "../styles/basic.css";
import "../styles/Pages/lists.css";
import "../styles/Pages/communities.css";
import "../styles/Header/header.css";

const Communities = () => {
  const { windowSize } = useGlobalContext();

  useEffect(() => {
    document.title = "Communities / X";
  }, []);

  return (
    <>
      <section className="section-container communities-section">
        <Header data="">
          <div className="header-top">
            <div className="header-top-left">
              <BackArrow />
              <HeaderText text="Communities" />
            </div>
            <HeaderIcons icons={[<BiSearch />, <BsPeople />]} />
          </div>
        </Header>

        <div className="communities-content">
          <CommunitiesContent />
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

export default Communities;
