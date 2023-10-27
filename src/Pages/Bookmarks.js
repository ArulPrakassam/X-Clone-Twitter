import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import LatestTrending from "../components/LatestTrending/LatestTrending";
import SearchBar from "../components/LatestTrending/SearchBar";
import WhatIsHappening from "../components/LatestTrending/WhatIsHappening";
import WhoToFollow from "../components/LatestTrending/WhoToFollow";
import { BackArrow, HeaderText } from "../components/Chunks/Chunks";
import FloatingMessageSection from "../components/Messages/FloatingMessageSection";
import MobileTweetButton from "../components/Tweets/MobileTweetButton";
import "../styles/basic.css";
import "../styles/Pages/bookmarks.css";
import "../styles/Header/header.css";

const Bookmarks = () => {
  const { windowSize } = useGlobalContext();

  useEffect(() => {
    document.title = "Bookmarks / X";
  }, []);

  return (
    <>
      <section className="section-container bookmarks-section">
        <Header data="">
          <div className="header-top">
            <div className="header-top-left">
              {windowSize <= 500 && <BackArrow />}
              <HeaderText text="Bookmarks">
                <p id="username">@ArulPrakassam</p>
              </HeaderText>
            </div>
          </div>
        </Header>

        <div className="bookmarks-content">
          <div className="bookmarks-wrapper">
            <h1>Save posts for later</h1>
            <p>Bookmark posts to easily find them again in the future.</p>
          </div>
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

export default Bookmarks;
