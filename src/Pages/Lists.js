import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import { HeaderIcons, BackArrow } from "../components/Chunks/Chunks";
import LatestTrending from "../components/LatestTrending/LatestTrending";
import SearchBar from "../components/LatestTrending/SearchBar";
import WhatIsHappening from "../components/LatestTrending/WhatIsHappening";
import WhoToFollow from "../components/LatestTrending/WhoToFollow";
import FloatingMessageSection from "../components/Messages/FloatingMessageSection";
import { TbNotes, BiDotsHorizontalRounded } from "../Icons";
import ListsContent from "../components/Lists/ListsContent";
import MobileTweetButton from "../components/Tweets/MobileTweetButton";
import "../styles/basic.css";
import "../styles/Pages/lists.css";
import "../styles/Header/header.css";

const Lists = () => {
  const { windowSize } = useGlobalContext();

  useEffect(() => {
    document.title = "Lists created by @ArulPrakassam / X";
  }, []);

  return (
    <>
      <section className="section-container lists-section">
        <Header data="">
          <div className="header-top">
            <BackArrow />
            <SearchBar placeholder="Search Lists" />
            {windowSize > 500 ? (
              <HeaderIcons icons={[<TbNotes />, <BiDotsHorizontalRounded />]} />
            ) : (
              <HeaderIcons icons={[<BiDotsHorizontalRounded />]} />
            )}
          </div>
        </Header>

        <div className="lists-content">
          <ListsContent />
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

export default Lists;
